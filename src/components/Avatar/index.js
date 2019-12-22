import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

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

        return <Img fixed={avatarImage.childImageSharp.fixed} className="foo" />
}

export default Avatar