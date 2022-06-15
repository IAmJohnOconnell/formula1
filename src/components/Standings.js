import React from "react"

const Standings = ({ postRaceDriverStandings }) => {
	return (
		<div className='timingList'>
			<ol>
				{postRaceDriverStandings &&
					postRaceDriverStandings.map((result) => {
						// let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
						return (
							<li
								className='timingListRow'
								key={result.position}
								// onClick={() => setQualyTimes(result)}
								result={result}>
								{/* <div>{driverFullName}</div> */}
								<div>
									{result.Driver.givenName} {result.Driver.familyName}
								</div>
								<div>{result.points}</div>
							</li>
						)
					})}
			</ol>
		</div>
	)
}

export default Standings
