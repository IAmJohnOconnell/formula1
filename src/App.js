import "./App.css"
import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import TimingBox from "./components/TimingBox"
import RaceTimeSheet from "./components/RaceTimeSheet"
import QualifyingTimeSheet from "./components/QualifyingTimeSheet"
import Standings from "./components/Standings"
import Controls from "./components/Controls"

function App() {
	// const [driversList, setDriversList] = useState()
	const [DriverQualifyingResults, setDriverQualifyingResults] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()
	const [selectedSession, setSelectedSession] = useState("qualifying")
	const [selectedRaceWeekend, setSelectedRaceWeekend] = useState("last")
	const [races, setRaces] = useState()
	const [postRaceDriverStandings, setPostRaceDriverStandings] = useState()
	const [allCircuitsData, setAllCircuitsData] = useState()

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

	useEffect(() => {
		fetch("https://v1.formula-1.api-sports.io/races/?season=2022&type=Race", {
			method: "GET",
			headers: {
				"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
				"x-rapidapi-key": "98e4da09ca41b9c4736446c45949eda0",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				let allCircuitsDataRes = data.response
				setAllCircuitsData(allCircuitsDataRes)
			})
	}, [])

	//Get list of drivers
	// fetch("https://ergast.com/api/f1/current/drivers.json")
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		let currentDrivers = data.MRData.DriverTable.Drivers
	// 		setDriversList(currentDrivers)
	// 	})

	return (
		<div className='App'>
			<Nav />
			<div className='AppContainer'>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='home' element={<Home />} />
					{/* <Route path='about' element={<About />} /> */}
				</Routes>
			</div>
		</div>
		// 	<Landing />
		// 	<Controls
		// 		handleSelectedRaceWeekendChange={handleSelectedRaceWeekendChange}
		// 		handleSelectedSessionChange={handleSelectedSessionChange}
		// 		races={races}
		// 	/>

		// 	<div className='timesheetContainer'>
		// 		<div className='timingWrapper'>
		// 			{selectedSession === "results" && (
		// 				<RaceTimeSheet
		// 					results={raceWeekendData && raceWeekendData}
		// 					session={selectedSession}
		// 				/>
		// 			)}

		// 			{selectedSession === "qualifying" && (
		// 				<QualifyingTimeSheet
		// 					results={raceWeekendData && raceWeekendData}
		// 					session={selectedSession}
		// 					setQualyTimes={setQualyTimes}
		// 				/>
		// 			)}

		// 			{selectedSession === "standings" && (
		// 				<Standings
		// 					results={raceWeekendData && raceWeekendData}
		// 					session={selectedSession}
		// 					selectedRaceWeekend={selectedRaceWeekend}
		// 					postRaceDriverStandings={postRaceDriverStandings}
		// 				/>
		// 			)}

		// 			{selectedSession === "qualifying" ? (
		// 				<div className='timingBoxes'>
		// 					<div className='session-results-header'>
		// 						<h3>Session Results</h3>
		// 					</div>
		// 					<div className='timingBoxWrapper'>
		// 						<TimingBox
		// 							DriverQualifyingResults={
		// 								DriverQualifyingResults && DriverQualifyingResults.Q1
		// 							}
		// 							session={"Q1"}
		// 						/>
		// 						<TimingBox
		// 							DriverQualifyingResults={
		// 								DriverQualifyingResults && DriverQualifyingResults.Q2
		// 							}
		// 							session={"Q2"}
		// 						/>
		// 						<TimingBox
		// 							DriverQualifyingResults={
		// 								DriverQualifyingResults && DriverQualifyingResults.Q3
		// 							}
		// 							session={"Q3"}
		// 						/>
		// 					</div>
		// 				</div>
		// 			) : null}
		// 		</div>
		// 	</div>
	)
}

export default App
