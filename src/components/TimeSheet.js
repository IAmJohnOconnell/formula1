import React from "react"

const TimeSheet = ({ results, setQualyTimes, session }) => {
	return (
		<div className='timingList'>
			<ol>
				{results &&
					results.map((result) => {
						let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
						return (
							<li
								className='timingListRow'
								key={result.position}
								onClick={() => setQualyTimes(result)}
								result={result}>
								<div>{driverFullName}</div>
								<div>
									{result.Q3 ? result.Q3 : result.Q2 ? result.Q2 : result.Q1}
								</div>
								<div>{result.Constructor.name}</div>
							</li>
						)
					})}
			</ol>
		</div>
	)
}

export default TimeSheet
