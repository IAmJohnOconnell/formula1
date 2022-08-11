import React from "react"
import styles from "./TimeSheet.module.css"

const RaceTimeSheet = ({ results, session }) => {
	return (
		<div className={styles.timeSheet}>
			<div className={styles.raceSessionHeader}>
				<h1>
					{results && results.raceName + " - "}
					{session === "results" ? `Race ${session}` : `${session} Results`}
				</h1>
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
						results.map((result) => {
							let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
							return (
								<tr className={styles.timingListRow} key={result.position}>
									<td>{result.position}</td>
									<td>{result.number}</td>
									<td>{driverFullName}</td>
									<td>{result.laps && result.laps}</td>
									<td>
										{result.Time && result.Time ? result.Time.time : "DNF"}
									</td>

									<td>{result.points}</td>
									{/* <td>{result.Constructor.name}</td> */}
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default RaceTimeSheet
