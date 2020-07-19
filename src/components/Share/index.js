import React from 'react'

import ShareNative from '../ShareNative'
import ShareLinks from '../ShareLinks'

import * as S from './styled';

const Share = () => (
    <S.ShareWrapper>
        <S.ShareDescription>Compartilhe:</S.ShareDescription>
        {navigator.share ? <ShareNative/> : <ShareLinks/> }

    </S.ShareWrapper>
)

export default Share;