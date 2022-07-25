import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
// Team Logos
import RedBull_Logo from "../assets/teams/redbull_logo.png"
import Ferrari_Logo from "../assets/teams/ferrari_logo.png"
import Mercedes_Logo from "../assets/teams/mercedes_logo.png"

import McLaren_Logo from "../assets/teams/mclaren_logo.png"
import Alpine_Logo from "../assets/teams/alpine_logo.png"
import AlphaTauri_Logo from "../assets/teams/alphatauri_logo.png"
import AlfaRomeo_Logo from "../assets/teams/alfaromeo_logo.png"
import AstonMartin_Logo from "../assets/teams/astonmartin_logo.png"
import Williams_Logo from "../assets/teams/williams_logo.png"
import Haas_Logo from "../assets/teams/haas_logo.png"

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

const Teams = () => {
	return (
		<TeamsPage>
			<SectionHeader
				title={"F1 Teams 2022"}
				subtitle={"Check out the teams competing for the top spot."}
			/>
			<PageContainer>
				<Card text='Red Bull' photo={RedBull_Logo} />
				<Card text='Ferrari' photo={Ferrari_Logo} />
				<Card text='Mercedes' photo={Mercedes_Logo} />
				<Card text='McLaren' photo={McLaren_Logo} />
				<Card text='Alpine' photo={Alpine_Logo} />
				<Card text='Alpha Tauri' photo={AlphaTauri_Logo} />
				<Card text='Alfa Romeo' photo={AlfaRomeo_Logo} />
				<Card text='Aston Martin' photo={AstonMartin_Logo} />
				<Card text='Williams' photo={Williams_Logo} />
				<Card text='Haas' photo={Haas_Logo} />
			</PageContainer>
		</TeamsPage>
	)
}

export default Teams
