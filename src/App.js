import { useEffect, useState, useRef } from "react"
import { Routes, Route, Link, useLocation, withRouter } from "react-router-dom"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Drivers from "./pages/Drivers"
import Standings from "./pages/Standings"
import Nav from "./components/Nav"
// import TimingBox from "./components/TimingBox"
// import RaceTimeSheet from "./components/RaceTimeSheet"
// import QualifyingTimeSheet from "./components/QualifyingTimeSheet"
// import Standings from "./components/Standings"
// import Controls from "./components/Controls"

// Team Logos
import RedBullRacing from "./assets/teams/redbull_logo.png"
import ScuderiaFerrari from "./assets/teams/ferrari_logo.png"
import MercedesAMGPetronas from "./assets/teams/mercedes_logo.png"
import McLarenRacing from "./assets/teams/mclaren_logo.png"
import AlpineF1Team from "./assets/teams/alpine_logo.png"
import ScuderiaAlphaTauriHonda from "./assets/teams/alphatauri_logo.png"
import AlfaRomeo from "./assets/teams/alfaromeo_logo.png"
import AstonMartinF1Team from "./assets/teams/astonmartin_logo.png"
import WilliamsF1Team from "./assets/teams/williams_logo.png"
import HaasF1Team from "./assets/teams/haas_logo.png"

// Driver Photos
import maxverstappen from "./assets/drivers/maxverstappen.png"
import sergioperez from "./assets/drivers/sergioperez.png"
import charlesleclerc from "./assets/drivers/charlesleclerc.png"
import carlossainz from "./assets/drivers/carlossainz.png"
import lewishamilton from "./assets/drivers/lewishamilton.png"
import nicholaslatifi from "./assets/drivers/nicholaslatifi.png"
import fernandoalonso from "./assets/drivers/fernandoalonso.png"
import lancestroll from "./assets/drivers/lancestroll.png"
import georgerussell from "./assets/drivers/georgerussell.png"
import guanyuzhou from "./assets/drivers/zhouguanyu.png"
import estebanocon from "./assets/drivers/estebanocon.png"
import kevinmagnussen from "./assets/drivers/kevinmagnussen.png"
import danielricciardo from "./assets/drivers/danielricciardo.png"
import landonorris from "./assets/drivers/landonorris.png"
import sebastianvettel from "./assets/drivers/sebastianvettel.png"
import alexanderalbon from "./assets/drivers/alexalbon.png"
import mickschumacher from "./assets/drivers/mickschumacher.png"
import pierregasly from "./assets/drivers/pierregasly.png"
import yukitsunoda from "./assets/drivers/yukitsunoda.png"
import valtteribottas from "./assets/drivers/valtteribottas.png"
import nicohulkenberg from "./assets/drivers/nicohulkenberg.png"

let photos = {
	driver: {
		maxverstappen,
		sergioperez,
		charlesleclerc,
		carlossainz,
		lewishamilton,
		nicholaslatifi,
		fernandoalonso,
		lancestroll,
		georgerussell,
		guanyuzhou,
		estebanocon,
		kevinmagnussen,
		danielricciardo,
		landonorris,
		sebastianvettel,
		alexanderalbon,
		mickschumacher,
		pierregasly,
		yukitsunoda,
		valtteribottas,
		nicohulkenberg,
	},

	team: {
		RedBullRacing,
		ScuderiaFerrari,
		MercedesAMGPetronas,
		McLarenRacing,
		AlpineF1Team,
		ScuderiaAlphaTauriHonda,
		AlfaRomeo,
		AstonMartinF1Team,
		WilliamsF1Team,
		HaasF1Team,
	},
}

function App() {
	const [driversList, setDriversList] = useState()
	const [DriverQualifyingResults, setDriverQualifyingResults] = useState()
	const [raceWeekendData, setRaceWeekendData] = useState()
	const [selectedSession, setSelectedSession] = useState("results")
	const [selectedRaceWeekend, setSelectedRaceWeekend] = useState("last")
	const [races, setRaces] = useState()
	const [driverStandings, setdriverStandings] = useState()
	// const [allCircuitsData, setAllCircuitsData] = useState()
	const { pathname } = useLocation()
	// const [constructorData, setConstructorsData] = useState()
	const [F1Data, setF1Data] = useState()
	const [DriverData, setDriverData] = useState()

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

	//Get All Races - for dropdowns
	useEffect(() => {
		fetch(`http://ergast.com/api/f1/current.json`)
			.then((res) => res.json())
			.then((data) => {
				let racesResults = data.MRData.RaceTable.Races.map((race) => race)
				setRaces(racesResults)
			})
	}, [])

	//Get Selected Race

	useEffect(() => {
		//Get raceWeekendData
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

				setRaceWeekendData(formattedRaceWeekendData)
			})

		fetch(`http://ergast.com/api/f1/current/driverStandings.json`)
			.then((res) => res.json())
			.then((data) => {
				let driverStandingsResults =
					data.MRData.StandingsTable.StandingsLists[0].DriverStandings
				setdriverStandings(driverStandingsResults)
			})
	}, [selectedSession, selectedRaceWeekend])

	useEffect(() => {
		let driverDataArr = []
		driverStandings &&
			driverStandings.map((result) => {
				let driver = result.Driver
				// let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`
				let driverPhoto = `${driver.givenName}${driver.familyName}`
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
				let team = result.Constructors[0]

				let driverData = {
					driverInfo: driver,
					driverPhoto,
					team,
				}

				driverDataArr.push(driverData)

				return setDriverData(driverDataArr)
			})
	}, [driverStandings])

	//Get Circuit Data
	// useEffect(() => {
	// 	fetch("https://v1.formula-1.api-sports.io/races/?season=2022&type=Race", {
	// 		method: "GET",
	// 		headers: {
	// 			"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
	// 			"x-rapidapi-key": "98e4da09ca41b9c4736446c45949eda0",
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			let allCircuitsDataRes = data.response
	// 			setAllCircuitsData(allCircuitsDataRes)
	// 		})
	// }, [])

	//Get Constructor Data
	// useEffect(() => {
	// 	fetch("https://v1.formula-1.api-sports.io/teams", {
	// 		method: "GET",
	// 		headers: {
	// 			"x-rapidapi-host": "api-formula-1.p.rapidapi.com",
	// 			"x-rapidapi-key": "98e4da09ca41b9c4736446c45949eda0",
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			let validConstructors = data.response.filter(
	// 				(team) => team.base != null
	// 			)
	// 			setConstructorsData(validConstructors)
	// 		})
	// }, [])

	let TEMPCONSTRUCTORS = [
		{
			id: 1,
			name: "Red Bull Racing",
			logo: "https://media.api-sports.io/formula-1/teams/1.png",
			base: "Milton Keynes, United Kingdom",
			first_team_entry: 1997,
			world_championships: 4,
			highest_race_finish: {
				position: 1,
				number: 83,
			},
			pole_positions: 77,
			fastest_laps: 81,
			president: "Dietrich Mateschitz",
			director: "Christian Horner",
			technical_manager: "Pierre Waché",
			chassis: "RB18",
			engine: "Red Bull Powertrains",
			tyres: "Pirelli",
		},
		{
			id: 2,
			name: "McLaren Racing",
			logo: "https://media.api-sports.io/formula-1/teams/2.png",
			base: "Woking, United Kingdom",
			first_team_entry: 1966,
			world_championships: 8,
			highest_race_finish: {
				position: 1,
				number: 183,
			},
			pole_positions: 156,
			fastest_laps: 161,
			president: "Zak Brown",
			director: "Andreas Seidl",
			technical_manager: "James Key",
			chassis: "MCL36",
			engine: "Mercedes",
			tyres: "Pirelli",
		},
		{
			id: 3,
			name: "Scuderia Ferrari",
			logo: "https://media.api-sports.io/formula-1/teams/3.png",
			base: "Maranello, Italy",
			first_team_entry: 1950,
			world_championships: 16,
			highest_race_finish: {
				position: 1,
				number: 243,
			},
			pole_positions: 238,
			fastest_laps: 258,
			president: "John Elkann",
			director: "Mattia Binotto",
			technical_manager: "Enrico Cardile / Enrico Gualtieri",
			chassis: "F1-75",
			engine: "Ferrari",
			tyres: "Pirelli",
		},
		{
			id: 5,
			name: "Mercedes-AMG Petronas",
			logo: "https://media.api-sports.io/formula-1/teams/5.png",
			base: "Brackley, United Kingdom",
			first_team_entry: 1970,
			world_championships: 8,
			highest_race_finish: "{number: 115, position: 1}",
			pole_positions: 127,
			fastest_laps: 86,
			president: "Markus Schäfer",
			director: "Toto Wolff",
			technical_manager: "Mike Elliott",
			chassis: "W13",
			engine: "Mercedes",
			tyres: "Pirelli",
		},
		{
			id: 7,
			name: "Scuderia AlphaTauri Honda",
			logo: "https://media.api-sports.io/formula-1/teams/7.png",
			base: "Faenza, Italy",
			first_team_entry: 1985,
			world_championships: 0,
			highest_race_finish: "{number: 2, position: 1}",
			pole_positions: 1,
			fastest_laps: 2,
			president: "Dietrich Mateschitz",
			director: "Franz Tost",
			technical_manager: "Jody Egginton",
			chassis: "AT03",
			engine: "Red Bull Powertrains",
			tyres: "Pirelli",
		},
		{
			id: 12,
			name: "Williams F1 Team",
			logo: "https://media.api-sports.io/formula-1/teams/12.png",
			base: "Grove, United Kingdom",
			first_team_entry: 1978,
			world_championships: 9,
			highest_race_finish: "{number: 114, position: 1}",
			pole_positions: 128,
			fastest_laps: 133,
			president: "Claire Williams",
			director: "Jost Capito",
			technical_manager: "François-Xavier Demaison",
			chassis: "FW44",
			engine: "Mercedes",
			tyres: "Pirelli",
		},
		{
			id: 13,
			name: "Alpine F1 Team",
			logo: "https://media.api-sports.io/formula-1/teams/13.png",
			base: "Enstone, United Kingdom",
			first_team_entry: 1986,
			world_championships: 2,
			highest_race_finish: "{number: 21, position: 1}",
			pole_positions: 20,
			fastest_laps: 15,
			president: "Alain Prost, Jérôme Stoll ",
			director: "Otmar Szafnauer",
			technical_manager: "Pat Fry",
			chassis: "A522",
			engine: "Renault",
			tyres: "Pirelli",
		},
		{
			id: 14,
			name: "Haas F1 Team",
			logo: "https://media.api-sports.io/formula-1/teams/14.png",
			base: "Kannapolis, United States",
			first_team_entry: 2016,
			world_championships: 0,
			highest_race_finish: "{number: 1, position: 4}",
			pole_positions: 0,
			fastest_laps: 2,
			president: "Gene Haas",
			director: "Guenther Steiner",
			technical_manager: "Simone Resta",
			chassis: "VF-22",
			engine: "Ferrari",
			tyres: "Pirelli",
		},
		{
			id: 17,
			name: "Aston Martin F1 Team",
			logo: "https://media.api-sports.io/formula-1/teams/17.png",
			base: "Silverstone, United Kingdom",
			first_team_entry: 2018,
			world_championships: 0,
			highest_race_finish: "{number: 1, position: 1}",
			pole_positions: 1,
			fastest_laps: 0,
			president: "Lawrence Stroll",
			director: "Mike Krack",
			technical_manager: "Andrew Green",
			chassis: "AMR22",
			engine: "Mercedes",
			tyres: "Pirelli",
		},
		{
			id: 18,
			name: "Alfa Romeo",
			logo: "https://media.api-sports.io/formula-1/teams/18.png",
			base: "Hinwil, Switzerland",
			first_team_entry: 1993,
			world_championships: 0,
			highest_race_finish: "{number: 1, position: 1}",
			pole_positions: 1,
			fastest_laps: 5,
			president: "Pascal Picci",
			director: "Frédéric Vasseur",
			technical_manager: "Jan Monchaux",
			chassis: "C42",
			engine: "Ferrari",
			tyres: "Pirelli",
		},
	]

	//Get Drivers
	useEffect(() => {
		fetch("http://ergast.com/api/f1/current/drivers.json")
			.then((res) => res.json())
			.then((data) => {
				let drivers = data.MRData.DriverTable.Drivers
				setDriversList(drivers)
			})
	}, [])

	//Set F1 Data
	useEffect(() => {
		setF1Data((prevState) => {
			return {
				...prevState,
				constructors: TEMPCONSTRUCTORS,
				drivers: DriverData,
			}
		})
	}, [DriverData])

	return (
		<div className='App'>
			{pathname === "/" ? null : <Nav />}
			<div className='AppContainer'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='teams'
						element={
							<Teams
								photos={photos}
								constructors={F1Data && F1Data.constructors}
							/>
						}
					/>
					<Route
						path='drivers'
						element={
							<Drivers photos={photos} drivers={F1Data && F1Data.drivers} />
						}
					/>
					<Route
						path='standings'
						element={
							<Standings
								driverStandings={driverStandings}
								// results={raceWeekendData && raceWeekendData}
								// selectedRaceWeekend={selectedRaceWeekend}
								// session={selectedSession}
								photos={photos}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
