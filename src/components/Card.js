import React from "react"
import styled from "styled-components"

const StyledChampionshipLeaderCard = styled.div`
	display: flex;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	margin-top: 2em;
	height: 100%;
	background-color: #33363d;
`

const PhotoContainer = styled.div`
	display: flex;
	align-items: center;

	img {
		max-width: 100%;
	}
`

const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	color: #f1f1f1;
	max-width: 75%;
	width: 100%;
`
const ChampionshipLeaderCard = ({ text, photo }) => {
	return (
		<StyledChampionshipLeaderCard>
			<PhotoContainer>
				<img src={photo} alt=''></img>
			</PhotoContainer>

			<Text>
				<p>{text}</p>
			</Text>
		</StyledChampionshipLeaderCard>
	)
}

export default ChampionshipLeaderCard
