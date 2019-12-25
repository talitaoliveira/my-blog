import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <PostItem
            slug = "/slug/"
            background = "red"
            category = "Misc"
            date = "25 de Dezembro de 2019"
            timeToRead = "4"
            title = "Seja bem vinda ao meu blog"
            description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae soluta ipsam necessitatibus esse voluptate in corporis iure nulla repellat saepe nobis, sed rerum possimus, quidem nam fugiat quae nihil!" />
    </Layout>
)


export default IndexPage
