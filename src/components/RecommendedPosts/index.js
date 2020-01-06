import React from 'react'
import propTypes from 'prop-types'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled';

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink to={previous.fields.slug}
            cover
            direction="left"
            duration={.6}
            bg={getThemeColor()}
            className="previous">
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}

        {next && (
            <S.RecommendedLink to={next.fields.slug}
            cover
            direction="right"
            duration={.6}
            bg={getThemeColor()}
            className="next">
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
)

RecommendedPosts.prototype = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    }),
    previous: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    })
}

export default RecommendedPosts;