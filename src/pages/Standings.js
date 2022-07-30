import React from "react"
import styled from "styled-components"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

const TimingListRow = styled.tr`
	:hover {
		border-bottom: 1px solid gray;
		color: #e10600;
	}

	.driver {
		font-weight: 600;
	}
`

const PageContainer = styled.div`
	max-width: 100%;
	width: 100%;
	gap: 2em;
	scroll-behavior: smooth;

	display: grid;
	grid-template-columns: 1fr;
	grid-auto-flow: row;
	color: white;

	table {
		border-collapse: collapse;
		justify-content: baseline;
		margin-top: 2rem;

		th,
		td {
			padding: 0.4em;
			text-align: left;
		}

		td {
		}
	}
`

const driverPhotosURL = `../assets/drivers/`

const Standings = ({
	postRaceDriverStandings,
	results,
	selectedRaceWeekend,
	photos,
}) => {
	return (
		<div>
			<SectionHeader
				title={"World Drivers Championship Standings"}
				subtitle={"Who will claim victory and make history?"}
			/>
			<PageContainer>
				<div>
					<div>
						{postRaceDriverStandings &&
							postRaceDriverStandings.map((result) => {
								let driver = result.Driver
								let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`
								let driverphoto = `${driver.givenName}${driver.familyName}`
									.toLowerCase()
									.normalize("NFD")
									.replace(/[\u0300-\u036f]/g, "")

								return (
									<Card
										key={result.position}
										text={driverName}
										photo={photos[driverphoto]}
									/>

									// <TimingListRow key={result.position}>
									// 	<td>{result.position}</td>
									// 	<td className='driver'>
									// 		{result.Driver.givenName} {result.Driver.familyName}
									// 	</td>
									// 	<td>{result.points}</td>
									// 	<td>{result.Constructors[0].name}</td>
									// </TimingListRow>
								)
							})}
					</div>
				</div>
			</PageContainer>
		</div>
	)
}

export default Standings

//ALT 0233  Perez
//ALT 0252 Hulkerberg
