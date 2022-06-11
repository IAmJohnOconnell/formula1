import "./App.css"
import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import TimingBox from "./components/TimingBox"
import TimeSheet from "./components/TimeSheet"

function App() {
	// const [driversList, setDriversList] = useState()
	const [DriverQualifyingResults, setDriverQualifyingResults] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()
	const [sessionChoice, setSessionChoice] = useState("qualifying")
	let url = `https://ergast.com/api/f1/current/last/${sessionChoice}.json`

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

	const handleSessionChange = (e) => {
		setSessionChoice(e.target.value)
	}

	useEffect(() => {
		fetch(`http://ergast.com/api/f1/current/last/${sessionChoice}.json`)
			.then((res) => res.json())
			.then((data) => {
				let { round, season, raceName, date, Circuit } =
					data.MRData.RaceTable.Races[0]

				let formattedRaceWeekendData = {
					round,
					season,
					raceName,
					date,
					Circuit,
				}

				if (data.MRData.RaceTable.Races[0].QualifyingResults !== undefined) {
					formattedRaceWeekendData = {
						...formattedRaceWeekendData,
						Results: data.MRData.RaceTable.Races[0].QualifyingResults,
					}
				}

				if (data.MRData.RaceTable.Races[0].Results !== undefined) {
					formattedRaceWeekendData = {
						...formattedRaceWeekendData,
						Results: data.MRData.RaceTable.Races[0].Results,
					}
				}

				console.log(formattedRaceWeekendData)

				setRaceWeekendData(formattedRaceWeekendData)
			})

		//Get list of drivers
		// fetch("https://ergast.com/api/f1/current/drivers.json")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		let currentDrivers = data.MRData.DriverTable.Drivers
		// 		setDriversList(currentDrivers)
		// 	})
	}, [sessionChoice])
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
				<Nav />
			</div>

			<div className='timingContainer'>
				<h2>
					It's About <i>Time</i>
				</h2>

				<div>
					<select
						onChange={(e) => {
							handleSessionChange(e)
						}}>
						<option value={"qualifying"}>Qualifying</option>
						<option value={"results"}>Race</option>
					</select>
				</div>

				<TimeSheet
					results={raceWeekendData && raceWeekendData.Results}
					session={sessionChoice}
					setQualyTimes={setQualyTimes}
				/>

				<div className='timingBoxes'>
					<TimingBox
						DriverQualifyingResults={
							DriverQualifyingResults && DriverQualifyingResults.Q1
						}
						session={"Q1"}
					/>
					<TimingBox
						DriverQualifyingResults={
							DriverQualifyingResults && DriverQualifyingResults.Q2
						}
						session={"Q2"}
					/>
					<TimingBox
						DriverQualifyingResults={
							DriverQualifyingResults && DriverQualifyingResults.Q3
						}
						session={"Q3"}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
