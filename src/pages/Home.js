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
	padding-top: 2em;
	font-weight: normal;
	font-size: 1.5em;
	max-width: 55ch;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const HomeNav = styled.div`
	display: grid;
	grid-template-areas:
		"one two"
		"three four"
		"five five";
	padding-top: 2em;
	gap: 1em;
	width: 100%;

	a {
		border: 1px solid #7889b3;
		border-radius: 10px;
		color: #f1f1f1;
		font-weight: bold;
		text-decoration: none;
		text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
		text-transform: uppercase;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
		width: 100%;
		height: 125px;
	}

	a:hover {
		border: 1px solid #e10600;
	}

	a:active {
		background-color: #e10600;
	}

	p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 125px;
	}

	a:nth-child(1) {
		grid-area: one;
		border: 1px solid #e10600;
		background: #e10600;
	}
	a:nth-child(2) {
		grid-area: two;
	}
	a:nth-child(3) {
		grid-area: three;
	}
	a:nth-child(4) {
		grid-area: four;
	}
	a:nth-child(5) {
		grid-area: five;
	}

	@media screen and (min-width: 600px) {
		grid-template-areas: "one two three four five";
	}

	@media screen and (min-width: 900px) {
		max-width: 100%;
	}

	@media screen and (min-width: 1200px) {
		max-width: 55%;
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
	flex-direction: column;
	width: 100%;

	@media screen and (min-width: 600px) {
		flex-direction: row;
		gap: 3em;
		justify-content: space-between;
	}

	@media screen and (min-width: 900px) {
		max-width: 100%;
	}

	@media screen and (min-width: 1200px) {
		max-width: 55%;
	}
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
					<Link to='/'>
						<p>Home</p>
					</Link>
					<Link to='/teams'>
						<p>Teams</p>
					</Link>
					<Link to='/drivers'>
						<p>Drivers</p>
					</Link>
					<Link to='/standings'>
						<p>Standings</p>
					</Link>
					<Link to='/results'>
						<p>Results</p>
					</Link>
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
