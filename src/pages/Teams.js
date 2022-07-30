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
	grid-template-columns: repeat(3, 1fr);
	max-width: 100%;
	width: 100%;
	gap: 2em;
`

const Teams = ({ photos }) => {
	return (
		<TeamsPage>
			<SectionHeader
				title={"F1 Teams 2022"}
				subtitle={"Check out the teams competing for the top spot."}
			/>
			<PageContainer>
				<Card text='Red Bull' photo={photos.RedBull_Logo} />
				<Card text='Ferrari' photo={photos.Ferrari_Logo} />
				<Card text='Mercedes' photo={photos.Mercedes_Logo} />
				<Card text='McLaren' photo={photos.McLaren_Logo} />
				<Card text='Alpine' photo={photos.Alpine_Logo} />
				<Card text='Alpha Tauri' photo={photos.AlphaTauri_Logo} />
				<Card text='Alfa Romeo' photo={photos.AlfaRomeo_Logo} />
				<Card text='Aston Martin' photo={photos.AstonMartin_Logo} />
				<Card text='Williams' photo={photos.Williams_Logo} />
				<Card text='Haas' photo={photos.Haas_Logo} />
			</PageContainer>
		</TeamsPage>
	)
}

export default Teams
