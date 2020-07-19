import React from 'react'

import * as S from './styled';

const handleClick = () => {
    if (navigator.share) {
        navigator.share({
          title: 'Talita Oliveira',
          text: 'Blog - Talita Oliveira',
          url: 'https://blog.talitaoliveira.com.br/',
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
  }

const ShareNative = () => (
    <S.ShareIcon onClick={handleClick}></S.ShareIcon>
)

export default ShareNative;