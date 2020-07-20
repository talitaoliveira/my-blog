import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from '../components/Comments'
import Share from '../components/Share'

import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const previous = pageContext.previousPost
    const next = pageContext.nextPost

    return (
        <Layout>
            <SEO 
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={post.frontmatter.image} />
            <S.PostHeader>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <Share slug={post.fields.slug}/>
                <S.PostDate>
                    {post.frontmatter.date} - {post.timeToRead} min de leitura
                </S.PostDate>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                <Share slug={post.fields.slug}/>
            </S.MainContent>
            <RecommendedPosts next={next} previous={previous} />
            <Comments url={post.fields.slug} title={post.frontmatter.title} />
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        fields{
            slug
        }
        frontmatter {
        title,
        description,
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        image
        }
        html,
        timeToRead
    }
    }
    `

export default BlogPost