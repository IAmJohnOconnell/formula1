import React from "react"

const RaceTimeSheet = ({ results, session }) => {
	return (
		<div className='timingList'>
			<div className='race-session-header'>
				<h3>
					{results && results.raceName + " - "}
					{session === "results" ? `Race ${session}` : `${session} Results`}
				</h3>
			</div>
			<table>
				<thead>
					<tr>
						<th>Pos</th>
						<th>Num</th>
						<th>Driver</th>
						<th>Laps</th>
						<th>Time</th>
						<th>Points</th>
						<th>Car</th>
					</tr>
				</thead>
				<tbody>
					{results &&
						results.Results.map((result) => {
							let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
							return (
								<tr className='timingListRow' key={result.position}>
									<td>{result.position}</td>
									<td>{result.number}</td>
									<td>{driverFullName}</td>
									<td>{result.laps && result.laps}</td>
									<td>
										{result.Time && result.Time ? result.Time.time : "DNF"}
									</td>

									<td>{result.points}</td>
									<td>{result.Constructor.name}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default RaceTimeSheet
