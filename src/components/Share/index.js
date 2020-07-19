import React from 'react'

import ShareNative from '../ShareNative'
import ShareLinks from '../ShareLinks'

import * as S from './styled';

const hasShareNative = () => {
    console.log('-----')
    console.log(navigator.share)
    if (navigator.share) {
        console.log('sim')
        return true
    }
    console.log('nao')
    return false
  }

const Share = () => (
    <S.ShareWrapper>
        <S.ShareDescription>Compartilhe:</S.ShareDescription>
        {hasShareNative() ? <ShareNative/> : <ShareLinks/>}

    </S.ShareWrapper>
)

export default Share;