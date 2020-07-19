import styled from "styled-components"

export const ShareLinksContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const ShareLinksList = styled.ul`
    width: 100%;
    max-width: 200px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none !important;
    padding: 0 !important;
    margin-bottom: 20px;
`

export const ShareLinksItem = styled.li``

export const ShareLinksLink = styled.a`
    && {
        color: red !important;
        text-decoration: none;
        transition: color 0.5s;

        &:hover{
            color: var(--highlight) ;
        }
    }
`

export const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
    border: 2px solid var(--texts);
    padding: 5px;
    border-radius: 5px;
    color: var(--texts);
`