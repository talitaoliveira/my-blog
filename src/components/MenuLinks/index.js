import React from 'react'

import links from './content'

import * as S from './styled'

const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                    <S.MenuLinksListItem>
                        <S.MenuLinksListLink to={link.url} title={link.label} activeClassName="active">
                            {link.label}
                        </S.MenuLinksListLink>
                    </S.MenuLinksListItem>
                )
            )}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default MenuLinks;