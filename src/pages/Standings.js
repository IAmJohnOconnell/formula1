import React from "react"
import styled from "styled-components"
import SectionHeader from "../components/SectionHeader"

const TimingListRow = styled.tr`
	cursor: pointer;

	:hover {
		font-weight: 500;
		border-bottom: 2px solid gray;
		color: white;
	}

	.driver {
		font-weight: 600;
	}
`

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 100%;
	width: 100%;
	gap: 2em;
	scroll-behavior: smooth;

	table {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
							<th>Points</th>
							<th>Constructor</th>
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
