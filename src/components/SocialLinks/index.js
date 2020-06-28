import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => (
    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label];

                return (
                    <S.SocialLinksItem key={i}>
                        <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                        </S.SocialLinksLink>
                        
                    </S.SocialLinksItem>
                )

            })}
        </S.SocialLinksList>
        <S.WebPage href="https://talitaoliveira.com.br/">
        https://talitaoliveira.com.br/
        </S.WebPage>
        
    </S.SocialLinksWrapper>
)

export default SocialLinks