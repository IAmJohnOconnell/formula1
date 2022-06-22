import "./App.css"
import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import TimingBox from "./components/TimingBox"
import RaceTimeSheet from "./components/RaceTimeSheet"
import QualifyingTimeSheet from "./components/QualifyingTimeSheet"
import Standings from "./components/Standings"

function App() {
	// const [driversList, setDriversList] = useState()
	const [DriverQualifyingResults, setDriverQualifyingResults] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()
	const [selectedSession, setSelectedSession] = useState("qualifying")
	const [selectedRaceWeekend, setSelectedRaceWeekend] = useState("last")
	const [races, setRaces] = useState()
	const [postRaceDriverStandings, setPostRaceDriverStandings] = useState()

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

	const handleSelectedSessionChange = (e) => {
		setSelectedSession(e.target.value)
	}

	const handleSelectedRaceWeekendChange = (e) => {
		if (raceWeekendData.round === selectedRaceWeekend) {
			console.log("selected race weeked" + selectedRaceWeekend)
			setSelectedRaceWeekend(raceWeekendData.raceName)

			console.log(raceWeekendData.raceName)
		} else {
			setSelectedRaceWeekend(e.target.value)
			console.log(e.target.value)
		}
	}

	useEffect(() => {
		//Get All Races - for dropdowns
		fetch(`http://ergast.com/api/f1/current.json`)
			.then((res) => res.json())
			.then((data) => {
				let racesResults = data.MRData.RaceTable.Races.map((race) => race)
				setRaces(racesResults)
			})
	}, [])

	useEffect(() => {
		//Get Selected Race
		fetch(
			`http://ergast.com/api/f1/current/${selectedRaceWeekend}/${selectedSession}.json`
		)
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

				// console.log(formattedRaceWeekendData)

				setRaceWeekendData(formattedRaceWeekendData)
			})

		fetch(
			`http://ergast.com/api/f1/current/${selectedRaceWeekend}/driverStandings.json`
		)
			.then((res) => res.json())
			.then((data) => {
				let postRaceDriverStandingsResults =
					data.MRData.StandingsTable.StandingsLists[0].DriverStandings
				// console.log(postRaceDriverStandingsResults)
				setPostRaceDriverStandings(postRaceDriverStandingsResults)
			})
	}, [selectedSession, selectedRaceWeekend])

	//Get list of drivers
	// fetch("https://ergast.com/api/f1/current/drivers.json")
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		let currentDrivers = data.MRData.DriverTable.Drivers
	// 		setDriversList(currentDrivers)
	// 	})

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

			<h2 id='aboutTime'>
				It's About <i>Time</i>
			</h2>

			<div className='controls'>
				<select
					onChange={(e) => {
						handleSelectedSessionChange(e)
					}}>
					<option value={"qualifying"}>Qualifying</option>
					<option value={"results"}>Race</option>
					<option value={"standings"}>Standings</option>
				</select>

				<select
					onChange={(e) => {
						handleSelectedRaceWeekendChange(e)
					}}
					defaultValue={""}>
					<option value='' disabled>
						Select a Race
					</option>
					{races &&
						races.map((race) => {
							return (
								<option key={race.round} value={race.round}>
									{race.raceName}
								</option>
							)
						})}
				</select>
			</div>

			<div className='timesheetContainer'>
				<div className='timingWrapper'>
					{selectedSession === "results" && (
						<RaceTimeSheet
							results={raceWeekendData && raceWeekendData}
							session={selectedSession}
						/>
					)}

					{selectedSession === "qualifying" && (
						<QualifyingTimeSheet
							results={raceWeekendData && raceWeekendData}
							session={selectedSession}
							setQualyTimes={setQualyTimes}
						/>
					)}

					{selectedSession === "standings" && (
						<Standings
							results={raceWeekendData && raceWeekendData}
							session={selectedSession}
							selectedRaceWeekend={selectedRaceWeekend}
							postRaceDriverStandings={postRaceDriverStandings}
						/>
					)}

					{selectedSession === "qualifying" ? (
						<div className='timingBoxes'>
							<div className='session-results-header'>
								<h3>Session Results</h3>
							</div>
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
					) : null}
				</div>
			</div>
		</div>
	)
}

export default App
