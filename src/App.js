import "./App.css"
import { useEffect, useState } from "react"

function App() {
	const [driversList, setDriversList] = useState()
	const [Q1, setQ1] = useState()
	const [Q2, setQ2] = useState()
	const [Q3, setQ3] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()

	const setQualyTimes = (result) => {
		result.Q1 !== undefined ? setQ1(result.Q1) : setQ1("No Time Recorded")
		result.Q2 !== undefined ? setQ2(result.Q2) : setQ2("No Time Recorded")
		result.Q3 !== undefined ? setQ3(result.Q3) : setQ3("No Time Recorded")
	}

	useEffect(() => {
		fetch("https://ergast.com/api/f1/current/last/qualifying.json")
			.then((res) => res.json())
			.then((data) => {
				let { raceName, round, season, date, Circuit, QualifyingResults } =
					data.MRData.RaceTable.Races[0]
				//Checks Data
				// console.log("RaceName: " + raceName)
				// console.log("round: " + round)
				// console.log("season: " + season)
				// console.log("date: " + date)
				// console.log(Circuit)

				let formattedRaceWeekendData = {
					round,
					season,
					raceName,
					date,
					Circuit,
					QualifyingResults,
				}
				setRaceWeekendData(formattedRaceWeekendData)

				// //Print / Render Qualifying Results
				// QualifyingResults.forEach((position) => {
				// 	// console.log(position.Driver)
				// 	let qualifyingResults = [position.Driver]
				// })
			})

		//Get list of drivers
		fetch("https://ergast.com/api/f1/current/drivers.json")
			.then((res) => res.json())
			.then((data) => {
				let currentDrivers = data.MRData.DriverTable.Drivers
				setDriversList(currentDrivers)
			})
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
										{/* <div> */}
										<div>{result.Q3}</div>
										{/* </div> */}
										<div>{result.Constructor.name}</div>
									</li>
								)
							})}
					</ol>
				</div>
				<div className='timingBoxes'>
					<div className='timingBox'>
						<div className='timingBox-header'>Q1</div>
						<div className='timingBox-content'>{Q1}</div>
					</div>
					<div className='timingBox'>
						<div className='timingBox-header'>Q2</div>
						<div className='timingBox-content'>{Q2}</div>
					</div>
					<div className='timingBox'>
						<div className='timingBox-header'>Q3</div>
						<div className='timingBox-content'>{Q3}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
