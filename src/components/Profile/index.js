import React from 'react'
import { StaticQuery, graphql } from gatsby

const Profile = () => {
	return (
		<StaticQuery
			query={
				graphql`
				query MySiteMetadata {
					site {
						siteMetadata {
							title
							position
							description
						}
					}
				}
				`
			}
			render={data => {
				<div className="profile-wrapper">
					<h1>{data.site.siteMetadata.title}</h1>
					<h1>{data.site.siteMetadata.position}</h1>
					<p>{data.site.siteMetadata.description}</p>
				</div>
			}}
		/>
	)
}

export default Profile;