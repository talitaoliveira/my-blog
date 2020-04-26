import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../styles/about'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <S.Header>
            <S.Title>Olá Seres Humanos!</S.Title>
        </S.Header>
        <S.MainContent>
            <p>Eu me chamo Talita, moro no Brasil em Recife (PE). </p>
            <p>Sou desenvolvedora de Software. Já tive experiência com Back end e Front end.</p>
            <p>Gosto de assuntos relacionados a tecnologia, desenvolvimento de software, organização, autoconhecimento/desenvolvimento pessoal, e outras coisas.</p>
            <p>Para me distrair gosto de correr ao ar livre 🏃🏽‍♀️ e jogar no Switch: 👾
                <ul>
                    <li>Adoro Stardew Valley - perco a noção do tempo jogando e tenho pena de vender minhas coisas</li>
                    <li>Teminei Luigi's Mansion - melhor jogo 💜</li>
                    <li>To tentando terminar Link's Aweakening - as vezes frustrada por não saber exatamente pra onde ir </li>
                </ul>
            </p>

        </S.MainContent>
    </Layout>
)

export default AboutPage
