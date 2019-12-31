import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
    list-style: none;
`

export const MenuLinksListItem = styled.li`
    padding: .5rem 0;

    .active{
        color: var(--highlight);
    }
`

export const MenuLinksListLink = styled(Link)`
    color: var(--texts);
    text-decoration: none;
    transition: color .5s;

    &:hover{
        color: var(--highlight);
    }

`