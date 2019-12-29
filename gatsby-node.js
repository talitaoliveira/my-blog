const path = require('path')
const { createFilePath } = require("gatsby-source-filesystem")

// To add the slug field to each post
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({
            node,
            getNode,
            basePath: "pages"
        })

        createNodeField({
            node,
            name: "slug",
            value: `/${slug.slice(12)}`,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                        description
                        category
                        background
                    }
                    timeToRead
                    fields {
                        slug
                    }
                }
                next {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
                previous {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
    `).then(result => {
        const posts = result.data.allMarkdownRemark.edges


        posts.forEach(({ node, next, previous }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/blog-post.js"),
                context: {
                    slug: node.fields.slug,
                    previousPost: next,
                    nextPost: previous
                }
            })
        })

        const postsPerpage = 2
        const numPages = Math.ceil(posts.length / postsPerpage)

        Array.from({length: numPages}).forEach((_, index) => {
            createPage({
                path: index === 0 ? `/` : `/page/${index + 1}`,
                component: path.resolve("./src/templates/blog-list.js"),
                context: {
                    limit: postsPerpage,
                    skip: index * postsPerpage,
                    numPages,
                    currentPage: index + 1
                }
            })
        })

    })

}