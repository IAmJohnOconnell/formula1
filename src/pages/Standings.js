import React from "react"
import styled from "styled-components"
import PageContainer from "../components/PageContainer"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

const StandingsPage = styled.div`
	table {
		max-width: 100%;
		width: 100%;
		border-collapse: collapse;
		color: #f1f1f1;
		box-shadow: 0 -2px 0 hsla(0 0% 100% / 15%), 0px 0px 4px hsla(0 0% 0% / 50%);
	}

	th {
		background-color: #33363d;
	}

	td,
	th {
		text-align: left;
		padding: 1em;
	}
`

const ResultRow = styled.tr`
	:nth-child(odd) {
		background-color: #1a1d23;
	}

	:hover {
		background-color: #33363d;
	}
`

const Standings = ({ driverStandings, photos }) => {
	return (
		<StandingsPage>
			<SectionHeader
				title={"World Drivers Championship Standings"}
				subtitle={"Who will claim victory and make history?"}
			/>
			{/* <PageContainer> */}
			<div>
				<table>
					<thead>
						<tr>
							<th>Pos</th>
							<th>Driver</th>
							<th>Points</th>
							<th>Car</th>
						</tr>
					</thead>
					<tbody>
						{driverStandings &&
							driverStandings.map((result) => {
								let driver = result.Driver
								let driverTeaminfo = result.Constructors[0]
								let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`
								let driverphoto = `${driver.givenName}${driver.familyName}`
									.toLowerCase()
									.normalize("NFD")
									.replace(/[\u0300-\u036f]/g, "")

								return (
									<ResultRow key={result.position}>
										<td>{result.position}</td>
										<td>{driverName}</td>
										<td>{driverTeaminfo.name}</td>
										<td>{result.points}</td>
									</ResultRow>
								)
							})}
					</tbody>
				</table>
			</div>
			{/* </PageContainer> */}
		</StandingsPage>
	)
}

export default Standings

// <Card
// 	key={result.position}
// 	text={driverName}
// 	photo={photos.driver[driverphoto]}
// 	team={driverTeaminfo}
// 	number={result.position}
// />
