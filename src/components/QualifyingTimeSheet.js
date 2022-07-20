import React from "react"
import styles from "./TimeSheet.module.css"

const QualifyingTimeSheet = ({ results, setQualyTimes, session }) => {
	return (
		<div className={styles.QualifyingTimeSheet}>
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
						<th>Time</th>
						<th>Car</th>
					</tr>
				</thead>
				<tbody>
					{results &&
						results.Results.map((result) => {
							let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
							return (
								<tr
									className={styles.timingListRow}
									key={result.position}
									onClick={() => setQualyTimes(result)}>
									<td>{result.position}</td>
									<td>{result.number}</td>
									<td>{driverFullName}</td>
									<td>
										{result.Q3 ? result.Q3 : result.Q2 ? result.Q2 : result.Q1}
									</td>
									<td>{result.Constructor.name}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default QualifyingTimeSheet
