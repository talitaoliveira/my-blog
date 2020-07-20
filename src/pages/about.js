import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Share from '../components/Share'

import * as S from '../styles/about'


const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <S.Header>
            <S.Title>Olá Seres Humanos!</S.Title>
        </S.Header>
        <S.MainContent>
            <Share slug="" title=""/>
            <p>Eu me chamo Talita, moro no Brasil em Recife (PE). </p>
            <p>Sou desenvolvedora de Software. Já tive experiência com Back end e Front end.</p>
            <p>Gosto de assuntos relacionados a tecnologia, desenvolvimento de software, organização, autoconhecimento/desenvolvimento pessoal, e outras coisas.</p>
            <p>Para me distrair gosto de correr ao ar livre 🏃🏽‍♀️ e jogar no Switch: 👾
                <ul>
                    <li>Adoro Stardew Valley - perco a noção do tempo jogando e tenho pena de vender minhas coisas</li>
                    <li>Teminei Luigi's Mansion - melhor jogo 💜</li>
                    <li>Teminei The Legend of Zelda: Link's Awakening</li>
                    <li>🎮 Jogando Legend Of Zelda: Breath of the Wild</li>
                    <li>🎮 Jogando Okami</li>
                </ul>
            </p>
            <br>
            </br>
            <S.Note>
                Esse layout foi desenvolvido no curso do Willian Justen <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS</a>
            </S.Note>
        </S.MainContent>
    </Layout>
)

export default AboutPage
