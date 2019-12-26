import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query PostList {
            allMarkdownRemark {
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
    `)

    const postList = allMarkdownRemark.edges

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


export default IndexPage
