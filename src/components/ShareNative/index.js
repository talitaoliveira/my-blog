import React from 'react'
import PropTypes from "prop-types"

import * as S from './styled';

const handleClick = (title, url) => {
    if (navigator.share) {
        navigator.share({
          title: `${title}`,
          text: `${title} - @liitacherry`,
          url: `https://blog.talitaoliveira.com.br${url}`,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
  }

const ShareNative = ({title, url}) => (
    <S.ShareIcon onClick={() => handleClick(title, url)}></S.ShareIcon>
)

export default ShareNative;

ShareNative.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}