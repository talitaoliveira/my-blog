import React from 'react'
import PropTypes from "prop-types"

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

const Share = ({title, url}) => (
    <S.ShareWrapper>
        <S.ShareDescription>Compartilhe:</S.ShareDescription>
        { hasShareNative() ? <ShareNative title={title} url={url} /> : <ShareLinks title={title} url={url} />}
    </S.ShareWrapper>
)

Share.defaultProps = {
    title: `Blog talita Oliveira`,
    url: ``,
}

Share.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Share;