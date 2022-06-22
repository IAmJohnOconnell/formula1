import React from "react"

const Standings = ({
	postRaceDriverStandings,
	results,
	selectedRaceWeekend,
}) => {
	return (
		<div className='timingList'>
			<div className='race-session-header'>
				<h3>
					{results &&
						`Round ${selectedRaceWeekend} World Drivers Championship Standings`}
				</h3>
			</div>
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
								<tr className='timingListRow' key={result.position}>
									<td>{result.position}</td>
									<td>
										{result.Driver.givenName} {result.Driver.familyName}
									</td>
									<td>{result.points}</td>
									<td>{result.Constructors[0].name}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default Standings
