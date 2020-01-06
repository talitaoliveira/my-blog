import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled';

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink to={previous.fields.slug}
            cover
            direction="left"
            duration={.6}
            bg="#16202c"
            className="previous">
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}

        {next && (
            <S.RecommendedLink to={previous.fields.slug}
            cover
            direction="right"
            duration={.6}
            bg="#16202c"
            className="next">
                {previous.frontmatter.title}
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