import React from "react"
import styled from "styled-components"
import { Routes, Route, Link } from "react-router-dom"

const StyledLanding = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #24262b;
	gap: 2em;
	padding: 64px 0px;
`
const Title = styled.h1`
	font-size: 24px;
	color: #d8d8d8;
`
const Subtitle = styled.h2`
	font-size: 14px;
	color: #919bb3;
	max-width: 25%;
`
const Timer = styled.p`
	color: #d8d8d8;
	font-weight: bold;
`

const Button = styled.button`
	background-color: transparent;
	border-radius: 2rem;
	font-size: 14px;
	font-weight: bold;
	color: #f1f1f1;
	border: 1px solid #f1f1f1;
	padding: 12px 48px;

	:hover {
		color: white;
		border: 1px solid #e10600;
	}

	:active {
		color: white;
		background-color: #e10600;
	}
`

const Landing = () => {
	return (
		<StyledLanding>
			<Title>Meow F1</Title>
			<Subtitle>
				Check race results, championship standings, the current schedule and
				more!
			</Subtitle>
			<Timer>-00:00:00</Timer>
			<Button>
				<Link to='/Home'>Enter</Link>
			</Button>
		</StyledLanding>
	)
}

export default Landing
