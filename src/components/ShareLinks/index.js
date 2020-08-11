import React from 'react'
import PropTypes from "prop-types"

import Icons from './Icons'
import links from './content'

import * as S from './styled';

const ShareLinks = ({title, url}) => (
    <S.ShareLinksContainer>
        <S.ShareLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label];
                const completeUrl = link.url(title, url)
                return (
                    <S.ShareLinksItem key={i}>
                        <S.ShareLinksLink 
                            href={completeUrl} 
                            title={link.label} 
                            target="_blank" 
                            rel="noopener noreferrer">
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

ShareLinks.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default ShareLinks;