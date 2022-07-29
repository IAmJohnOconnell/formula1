import React from "react"
import styled from "styled-components"
import SectionHeader from "../components/SectionHeader"

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

const Standings = ({
	postRaceDriverStandings,
	results,
	selectedRaceWeekend,
}) => {
	return (
		<div>
			<SectionHeader
				title={"World Drivers Championship Standings"}
				subtitle={"Who will claim victory and make history?"}
			/>
			<PageContainer>
				<table>
					<thead>
						<tr>
							<th>Pos</th>
							<th>Driver</th>
							<th>Pts</th>
							<th>Team</th>
						</tr>
					</thead>
					<tbody>
						{postRaceDriverStandings &&
							postRaceDriverStandings.map((result) => {
								return (
									<TimingListRow key={result.position}>
										<td>{result.position}</td>
										<td className='driver'>
											{result.Driver.givenName} {result.Driver.familyName}
										</td>
										<td>{result.points}</td>
										<td>{result.Constructors[0].name}</td>
									</TimingListRow>
								)
							})}
					</tbody>
				</table>
			</PageContainer>
		</div>
	)
}

export default Standings
