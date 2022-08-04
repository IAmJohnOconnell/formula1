import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

const TeamsPage = styled.div`
	h1 {
		font-size: 2rem;
		color: white;
	}

	h2 {
		max-width: 55ch;
		padding-top: 1.5rem;
		color: #919bb3;
		font-size: 1.5rem;
		font-weight: normal;
	}
`

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-flow: row;
	max-width: 100%;
	width: 100%;
	gap: 2em;

	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1200px) {
	}
`

const Teams = ({ photos, constructors }) => {
	return (
		<TeamsPage>
			<SectionHeader
				title={"F1 Teams 2022"}
				subtitle={"Check out the teams competing for the top spot."}
			/>
			<PageContainer>
				{constructors.map((constructor) => {
					let constructorPhoto = constructor.name.split(" ").join("")

					constructorPhoto = constructorPhoto.split("-").join("")

					return (
						<Card
							text={constructor.name}
							photo={photos.team[constructorPhoto]}
							key={constructor.id}
							type='teams'
						/>
					)
				})}
			</PageContainer>
		</TeamsPage>
	)
}

export default Teams
