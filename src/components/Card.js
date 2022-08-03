import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	padding-inline: 1rem;
	box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.2);
	background-color: #33363d;
	border-radius: 10px;
	overflow: hidden;

	header {
		display: flex;
		align-items: center;
		gap: 0.4em;
		/* text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); */

		Text {
			padding: 2rem;
		}
	}

	.divider {
		background-color: #3671c6;
		border: 2px solid #3671c6;
		width: min-content;
		height: 100%;
	}
`

const Text = styled.p`
	font-size: 20px;
	color: #f1f1f1;
	max-width: 100%;
	width: 100%;
`

const TeamText = styled(Text)`
	padding-block: 0.5em;
	/* text-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); */
	/* text-shadow: var(--text-shadow-1); */
`

const IconContainer = styled.div`
	img {
		max-width: 48px;
		width: 100%;
	}
`
const CardBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;

	z-index: 1;

	.number {
		display: flex;
		position: absolute;
		bottom: -15px;
		color: rgba(65, 65, 65, 0.8);
		font-size: 64px;
		font-weight: bold;
		text-shadow: 0 10px 24px rgba(0, 0, 0, 0.8);
		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: white;
	}
`

const CardImg = styled.div`
	display: flex;
`

const Card = ({ text, photo, number, type, position, team }) => {
	return (
		<StyledCard>
			<header>
				{type !== "teams" ? (
					<>
						<IconContainer>
							<img src={photo} alt='' />
						</IconContainer>
						<span className='divider' />
					</>
				) : null}

				<Text>{text}</Text>
			</header>

			<CardBody>
				<TeamText>{team && team.name}</TeamText>
				{type !== "standings" ? (
					<div className='number'>{number}</div>
				) : (
					<div className='number'>{position}</div>
				)}
				<CardImg>
					<img src={photo} alt=''></img>
				</CardImg>
			</CardBody>
		</StyledCard>
	)
}

export default Card
