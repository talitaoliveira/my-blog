import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styled';

// const handleClick = () => {
//     if (navigator.share) {
//         navigator.share({
//           title: 'Talita Oliveira',
//           text: 'Blog - Talita Oliveira',
//           url: 'https://blog.talitaoliveira.com.br/',
//         })
//           .then(() => console.log('Successful share'))
//           .catch((error) => console.log('Error sharing', error));
//       }
//   }

const ShareLinks = () => (
    <S.ShareLinksContainer>
        <S.ShareThisPostTitle>Compartilhe este post:</S.ShareThisPostTitle>
        <S.ShareLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label];

                return (
                    <S.ShareLinksItem key={i}>
                        <S.ShareLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
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