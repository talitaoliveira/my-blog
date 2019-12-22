import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: {eq: "profile-image.jpg"}){
                    childImageSharp {
                        fixed(width: 60, height: 60){
                            # ...GatsbyImageSharpFixed
                            ...GatsbyImageSharpFixed_tracedSVG
                            # ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `)

        return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} className="foo" />
}

export default Avatar