import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/styledAbout"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <S.AboutHeader>
            <S.AboutTitle>Sobre Mim</S.AboutTitle>
        </S.AboutHeader>
        <S.MainContent>
            <p>
                Olá pessoas!
                Como esse blog já diz, eu me chamo Talita Oliveira.
                Tehho 27 anos e trabalho com tecnologia desde 2013 (começando 1 ano e meio como estagiária).
            </p>

            <h2>Sobre Trabalho</h2>
            <p>Sou desenvolvedora e me considero um tanto fullstack (pelas oportunidades que tive de mudar, daí acabei sendo)

            Comecei a carreira com PHP e agregados como HTML, CSS, Javascript (jQuery), PostgreSQL e MySQL.

            Sempre gostei bastante da área de frontend também. Nisso procurava tudo sobre front-end (HTML, CSS, Javascript e frameworks).
            Fiz um curso de especialização com PWA e nisso consegui trabalhar com Ionic 3 por um ano e poucos meses.

            Depois, passei por Java (não era uma linguagem que eu estava exatamente procurando aprender, mas foi acontecendo). Achei Java interessante também (tinha meus preconceitos desde a faculdade).

            Enfim... Espero mais desafios.
            Adoro programar e por enquanto não me vejo fazendo nada profissionalmente além de mexer em código ou lidar com gente que coda.
        </p>
        </S.MainContent>

    </Layout>
)

export default AboutPage
