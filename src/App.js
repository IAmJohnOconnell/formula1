import "./App.css"
import { useEffect, useState } from "react"

function App() {
	// const [driversList, setDriversList] = useState()
	const [DriverQualifyingResults, setDriverQualifyingResults] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()

	const setQualyTimes = (result) => {
		let Q1, Q2, Q3

		result.Q1 !== undefined ? (Q1 = result.Q1) : (Q1 = "No Time Recorded")
		result.Q2 !== undefined ? (Q2 = result.Q2) : (Q2 = "No Time Recorded")
		result.Q3 !== undefined ? (Q3 = result.Q3) : (Q3 = "No Time Recorded")

		setDriverQualifyingResults((prevResults) => {
			return {
				...prevResults,
				Q1,
				Q2,
				Q3,
			}
		})
	}

	useEffect(() => {
		fetch("https://ergast.com/api/f1/current/last/qualifying.json")
			.then((res) => res.json())
			.then((data) => {
				let { raceName, round, season, date, Circuit, QualifyingResults } =
					data.MRData.RaceTable.Races[0]

				let formattedRaceWeekendData = {
					round,
					season,
					raceName,
					date,
					Circuit,
					QualifyingResults,
				}

				setRaceWeekendData(formattedRaceWeekendData)
			})

		//Get list of drivers
		// fetch("https://ergast.com/api/f1/current/drivers.json")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		let currentDrivers = data.MRData.DriverTable.Drivers
		// 		setDriversList(currentDrivers)
		// 	})
	}, [])
	return (
		<div className='App'>
			<div className='header'>
				<div className='title'>
					<h1>
						Formula One
						<br />
						and Done
					</h1>
				</div>
				<nav className='nav'>
					<li>Home</li>
					<li>Next</li>
					<li>Last</li>
				</nav>
			</div>
			<div className='timingContainer'>
				<h2>
					It's About <i>Time</i>
				</h2>
				<div className='timingList'>
					<ol>
						{raceWeekendData &&
							raceWeekendData.QualifyingResults.map((result) => {
								let driverFullName = `${result.Driver.givenName} ${result.Driver.familyName}`
								return (
									<li
										className='timingListRow'
										key={result.position}
										onClick={() => setQualyTimes(result)}
										result={result}>
										<div>{driverFullName}</div>
										<div>{result.Q3}</div>
										<div>{result.Constructor.name}</div>
									</li>
								)
							})}
					</ol>
				</div>

				<div className='timingBoxes'>
					<div className='timingBox'>
						<div className='timingBox-header'>Q1</div>
						<div className='timingBox-content'>
							{DriverQualifyingResults && DriverQualifyingResults.Q1}
						</div>
					</div>
					<div className='timingBox'>
						<div className='timingBox-header'>Q2</div>
						<div className='timingBox-content'>
							{DriverQualifyingResults && DriverQualifyingResults.Q2}
						</div>
					</div>
					<div className='timingBox'>
						<div className='timingBox-header'>Q3</div>
						<div className='timingBox-content'>
							{DriverQualifyingResults && DriverQualifyingResults.Q3}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
