import React, { useState, useEffect } from 'react'

import ShareNative from '../ShareNative'
import ShareLinks from '../ShareLinks'

import * as S from './styled';

const hasShareNative = () => {
    if (typeof navigator !== `undefined`) {
        if (navigator.share) {
            console.log('suporta o share navigator')
            return true
        }
        return false
        console.log('nao suporta o share navigator')
    }
    console.log('nao tem navigator')
    return false
  }

const Share = ({slug}) => (
    <S.ShareWrapper>
        <S.ShareDescription>Compartilhe:</S.ShareDescription>
        { hasShareNative() ? <ShareNative/> : <ShareLinks slug={slug}/>}
    </S.ShareWrapper>
)

export default Share;