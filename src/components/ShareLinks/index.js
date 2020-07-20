import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styled';

const ShareLinks = ({slug}) => (
    <S.ShareLinksContainer>
        <S.ShareLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label];

                const url = link.url + slug

                return (
                    <S.ShareLinksItem key={i}>
                        <S.ShareLinksLink href={url} title={link.label} target="_blank" rel="noopener noreferrer">
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                        </S.ShareLinksLink>
                    </S.ShareLinksItem>
                )
            })}
        </S.ShareLinksList>
    </S.ShareLinksContainer>
)

export default ShareLinks;