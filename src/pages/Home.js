import React from "react"
import styled from "styled-components"
import UpNext from "../components/UpNext"
import { Routes, Route, Link } from "react-router-dom"
import ChampionshipLeaderCard from "../components/ChampionshipLeaderCard"
import MVerstappen from "../assets/drivers/maxverstappen.png"
import RedBull_Logo from "../assets/teams/redbull_logo.png"

const StyledHome = styled.div``

const Greeting = styled.div`
	color: white;

	h1 {
		text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
	}

	span {
		color: #7889b3;
	}
`
const Date = styled.p`
	color: #e10600;
	padding-top: 4px;
	text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
	font-size: 14px;
`

const Intro = styled.p`
	color: #919bb3;
	padding-top: 32px;
	font-weight: normal;
	font-size: 24;
	max-width: 55ch;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const HomeNav = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 2em;
	max-width: 65%;

	a {
		padding: 2em;
		text-decoration: none;
		text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
		color: #f1f1f1;
		text-transform: uppercase;
		font-weight: bold;
		border: 1px solid #7889b3;
		border-radius: 10px;
	}

	a:hover {
		border: 1px solid #e10600;
	}

	a:active {
		background-color: #e10600;
	}
`

const SectionLabel = styled.p`
	text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
	font-size: 24px;
	color: #f1f1f1;
`

const Section = styled.div`
	padding-top: 4em;
`

const ChampionshipLeadersSection = styled(Section)`
	display: flex;
	flex-direction: column;
`
const ChampionshipLeadersContainer = styled.div`
	display: flex;
	gap: 3em;
	max-width: 75%;
`

const MutedLabel = styled.p`
	color: #919bb3;
	text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
`

const Home = () => {
	return (
		<StyledHome>
			<Header>
				<Greeting>
					<h1>
						<span>Welcome,</span> Race Fan
					</h1>
					<Date>Jul 19, 2022</Date>
					<Intro>
						This is your dashboard. Use the buttons below to find more
						information about the current Formula 2 season and its competitors.
					</Intro>
				</Greeting>
				<UpNext />
			</Header>
			<Section>
				<SectionLabel>Navigation</SectionLabel>
				<HomeNav>
					<Link to='/home'>Home</Link>
					<Link to='/teams'>Teams</Link>
					<Link to='/drivers'>Drivers</Link>
					<Link to='/standings'>Standings</Link>
					<Link to='/results'>Results</Link>
				</HomeNav>
			</Section>
			<Section>
				<SectionLabel>Championship Leaders</SectionLabel>
				<ChampionshipLeadersContainer>
					<ChampionshipLeadersSection>
						<MutedLabel>WDC</MutedLabel>
						<ChampionshipLeaderCard
							name='Max Verstappen'
							photo={MVerstappen}></ChampionshipLeaderCard>
					</ChampionshipLeadersSection>
					<ChampionshipLeadersSection>
						<MutedLabel>Constructors</MutedLabel>
						<ChampionshipLeaderCard
							name='Red Bull'
							photo={RedBull_Logo}></ChampionshipLeaderCard>
					</ChampionshipLeadersSection>
				</ChampionshipLeadersContainer>
			</Section>
		</StyledHome>
	)
}

export default Home
