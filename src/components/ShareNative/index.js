import React from 'react'

import * as S from './styled';

const handleClick = (slug, title) => {
    if (navigator.share) {
        navigator.share({
          title: `Blog Talita Oliveira - ${title}`,
          text: `${title} - Blog Talita Oliveira @liitacherry`,
          url: `https://blog.talitaoliveira.com.br${slug}`,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
  }

const ShareNative = ({slug, title}) => (
    <S.ShareIcon onClick={handleClick(slug, title)}></S.ShareIcon>
)

export default ShareNative;