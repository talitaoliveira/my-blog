import React from 'react'

import ShareNative from '../ShareNative'
import ShareLinks from '../ShareLinks'

import * as S from './styled';

const hasShareNative = () => {
    if (navigator.share) {
        return true
    }
    return false
  }

const Share = () => (
    <S.ShareWrapper>
        <S.ShareDescription>Compartilhe:</S.ShareDescription>
        {hasShareNative ? <ShareNative/> : <ShareLinks/>}

    </S.ShareWrapper>
)

export default Share;