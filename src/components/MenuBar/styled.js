import styled from 'styled-components'
import media from 'styled-media-query'

import AniLink from "gatsby-plugin-transition-link/AniLink";


export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.75rem;

    ${media.lessThan("large")`
        height: auto;
        width: 100%;
        flex-direction: row; 
        bottom: 0;
    `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

    ${media.lessThan("large")`
        flex-direction: row; 
    `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 1.75rem;
  padding: 1.1rem;
  position: relative;
  width: 1.75rem;

    &.light{
        color:#d4d400;
        &:hover {
            color: #e2e240;
        }
    }

    &:hover {
        color: var(--highlight);
    }

    &.listMode{
        ${media.lessThan("large")`
          display: none;
        `}
    }
`