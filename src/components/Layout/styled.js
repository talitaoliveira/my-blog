import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
    display: flex;
    ${media.lessThan("large")`
        flex-direction: column;
    `}
`

export const LayoutMain = styled.main`
    background-color: var(--background);
    min-height: 100vh;
    padding: 0 3.65rem 0 20rem;
    width: 100%;

    body#grid & {
        grid-template-areas: 
        "posts" 
        "pagination";
    }

    ${media.lessThan("large")`
        padding: 0;
        margin: 4rem 0 5rem 0;
    `}

`

