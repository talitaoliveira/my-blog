import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    return (
        <Layout>
            <SEO title="Home" />
            {postList.map(({
                node: {
                    frontmatter: { background, category, description, date, title },
                    timeToRead,
                    fields: { slug }
                }
            }) => (
                    <PostItem
                        slug={slug}
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description} />

                )
            )}
        </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
            allMarkdownRemark(
                sort: {order: DESC, fields: frontmatter___date}
                limit: $limit
                skip: $skip
                ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                            description
                            category
                            background
                        }
                        timeToRead,
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `

export default BlogList