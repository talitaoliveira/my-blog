import React from 'react'

import links from './content'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const MenuLinks = () => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                    <S.MenuLinksListItem key={i}>
                        <S.MenuLinksListLink 
                        to={link.url} 
                        title={link.label} 
                        cover
                        activeClassName="active"
                        direction="left"
                        duration={.6}
                        bg={getThemeColor()}>
                            {link.label}
                        </S.MenuLinksListLink>
                    </S.MenuLinksListItem>
                )
            )}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default MenuLinks;