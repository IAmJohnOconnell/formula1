import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

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

const TeamsPage = styled.div`
	h1 {
		font-size: 2rem;
		color: white;
	}

	h2 {
		max-width: 55ch;
		padding-top: 1.5rem;
		color: #919bb3;
		font-size: 1.5rem;
		font-weight: normal;
	}
`

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 100%;
	width: 100%;
	gap: 2em;
`

const Teams = ({ photos, constructors }) => {
	return (
		<TeamsPage>
			<SectionHeader
				title={"F1 Teams 2022"}
				subtitle={"Check out the teams competing for the top spot."}
			/>
			<PageContainer>
				{TEMPCONSTRUCTORS.map((constructor) => {
					return console.log(constructor)
				})}
				<Card text='Red Bull' photo={photos.RedBull_Logo} />
				<Card text='Ferrari' photo={photos.Ferrari_Logo} />
				<Card text='Mercedes' photo={photos.Mercedes_Logo} />
				<Card text='McLaren' photo={photos.McLaren_Logo} />
				<Card text='Alpine' photo={photos.Alpine_Logo} />
				<Card text='Alpha Tauri' photo={photos.AlphaTauri_Logo} />
				<Card text='Alfa Romeo' photo={photos.AlfaRomeo_Logo} />
				<Card text='Aston Martin' photo={photos.AstonMartin_Logo} />
				<Card text='Williams' photo={photos.Williams_Logo} />
				<Card text='Haas' photo={photos.Haas_Logo} />
			</PageContainer>
		</TeamsPage>
	)
}

export default Teams

// {
//   "photos": {
//     "RedBull_Logo": "/static/media/redbull_logo.b3308ca45cb53fa087c3.png",
//     "Ferrari_Logo": "/static/media/ferrari_logo.29407456ca5aecbfaa50.png",
//     "Mercedes_Logo": "/static/media/mercedes_logo.383b092940aabb0f4068.png",
//     "McLaren_Logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAC0CAYAAADl5PURAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnXtcVGX+x8+ZGRS5y8VFRFuVHyCCl1xRSzNXy2xlTTCCn2vqr5eC6a9EC1/+TEDSXCnT2kzFdc1cF2UVKlzL1BQlWXVNiTsipiCSXOI2gDAz5/d6JoYdZ+fynJnDMNN85o9dbJ7n+3y/7+8zn/Pczjksgw8IgAAI2CgB1kbjRtggAAIgwEAA0QlAAARslgAE0GZTj8BBAAQggOgDIAACNksAAmizqUfgIAACEED0ARAAAZslAAG02dQjcBAAAQgg+gAIgIDNEoAA2mzqETgIgAAEEH0ABEDAZglAAG029QgcBEAAAog+AAIgYLMEIIA2m3oEDgIgAAFEHwABELBZAhBAm009AgcBEIAAog+AAAjYLAEIoM2mHoGDAAhAANEHQAAEbJYABNBmU4/AQQ...",
//     "Alpine_Logo": "/static/media/alpine_logo.afe3dd62f1c469b40273.png",
//     "AlphaTauri_Logo": "/static/media/alphatauri_logo.3b508c02d6fba5380a20.png",
//     "AlfaRomeo_Logo": "/static/media/alfaromeo_logo.306b8ba5453317252b81.png",
//     "AstonMartin_Logo": "/static/media/astonmartin_logo.886e91227309bbc6c563.png",
//     "Williams_Logo": "/static/media/williams_logo.cb15975b69124c6485f9.png",
//     "Haas_Logo": "/static/media/haas_logo.69dc6fe7f2ee79bba79b.png"
//   },

//   "constructors": [
//     {
//       "id": 1,
//       "name": "Red Bull Racing",
//       "logo": "https://media.api-sports.io/formula-1/teams/1.png",
//       "base": "Milton Keynes, United Kingdom",
//       "first_team_entry": 1997,
//       "world_championships": 4,
//       "highest_race_finish": {
//         "position": 1,
//         "number": 83
//       },
//       "pole_positions": 77,
//       "fastest_laps": 81,
//       "president": "Dietrich Mateschitz",
//       "director": "Christian Horner",
//       "technical_manager": "Pierre Waché",
//       "chassis": "RB18",
//       "engine": "Red Bull Powertrains",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 2,
//       "name": "McLaren Racing",
//       "logo": "https://media.api-sports.io/formula-1/teams/2.png",
//       "base": "Woking, United Kingdom",
//       "first_team_entry": 1966,
//       "world_championships": 8,
//       "highest_race_finish": {
//         "position": 1,
//         "number": 183
//       },
//       "pole_positions": 156,
//       "fastest_laps": 161,
//       "president": "Zak Brown",
//       "director": "Andreas Seidl",
//       "technical_manager": "James Key",
//       "chassis": "MCL36",
//       "engine": "Mercedes",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 3,
//       "name": "Scuderia Ferrari",
//       "logo": "https://media.api-sports.io/formula-1/teams/3.png",
//       "base": "Maranello, Italy",
//       "first_team_entry": 1950,
//       "world_championships": 16,
//       "highest_race_finish": {
//         "position": 1,
//         "number": 243
//       },
//       "pole_positions": 238,
//       "fastest_laps": 258,
//       "president": "John Elkann",
//       "director": "Mattia Binotto",
//       "technical_manager": "Enrico Cardile / Enrico Gualtieri",
//       "chassis": "F1-75",
//       "engine": "Ferrari",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 5,
//       "name": "Mercedes-AMG Petronas",
//       "logo": "https://media.api-sports.io/formula-1/teams/5.png",
//       "base": "Brackley, United Kingdom",
//       "first_team_entry": 1970,
//       "world_championships": 8,
//       "highest_race_finish": "{number: 115, position: 1}",
//       "pole_positions": 127,
//       "fastest_laps": 86,
//       "president": "Markus Schäfer",
//       "director": "Toto Wolff",
//       "technical_manager": "Mike Elliott",
//       "chassis": "W13",
//       "engine": "Mercedes",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 7,
//       "name": "Scuderia AlphaTauri Honda",
//       "logo": "https://media.api-sports.io/formula-1/teams/7.png",
//       "base": "Faenza, Italy",
//       "first_team_entry": 1985,
//       "world_championships": 0,
//       "highest_race_finish": "{number: 2, position: 1}",
//       "pole_positions": 1,
//       "fastest_laps": 2,
//       "president": "Dietrich Mateschitz",
//       "director": "Franz Tost",
//       "technical_manager": "Jody Egginton",
//       "chassis": "AT03",
//       "engine": "Red Bull Powertrains",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 12,
//       "name": "Williams F1 Team",
//       "logo": "https://media.api-sports.io/formula-1/teams/12.png",
//       "base": "Grove, United Kingdom",
//       "first_team_entry": 1978,
//       "world_championships": 9,
//       "highest_race_finish": "{number: 114, position: 1}",
//       "pole_positions": 128,
//       "fastest_laps": 133,
//       "president": "Claire Williams",
//       "director": "Jost Capito",
//       "technical_manager": "François-Xavier Demaison",
//       "chassis": "FW44",
//       "engine": "Mercedes",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 13,
//       "name": "Alpine F1 Team",
//       "logo": "https://media.api-sports.io/formula-1/teams/13.png",
//       "base": "Enstone, United Kingdom",
//       "first_team_entry": 1986,
//       "world_championships": 2,
//       "highest_race_finish": "{number: 21, position: 1}",
//       "pole_positions": 20,
//       "fastest_laps": 15,
//       "president": "Alain Prost, Jérôme Stoll ",
//       "director": "Otmar Szafnauer",
//       "technical_manager": "Pat Fry",
//       "chassis": "A522",
//       "engine": "Renault",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 14,
//       "name": "Haas F1 Team",
//       "logo": "https://media.api-sports.io/formula-1/teams/14.png",
//       "base": "Kannapolis, United States",
//       "first_team_entry": 2016,
//       "world_championships": 0,
//       "highest_race_finish": "{number: 1, position: 4}",
//       "pole_positions": 0,
//       "fastest_laps": 2,
//       "president": "Gene Haas",
//       "director": "Guenther Steiner",
//       "technical_manager": "Simone Resta",
//       "chassis": "VF-22",
//       "engine": "Ferrari",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 17,
//       "name": "Aston Martin F1 Team",
//       "logo": "https://media.api-sports.io/formula-1/teams/17.png",
//       "base": "Silverstone, United Kingdom",
//       "first_team_entry": 2018,
//       "world_championships": 0,
//       "highest_race_finish": "{number: 1, position: 1}",
//       "pole_positions": 1,
//       "fastest_laps": 0,
//       "president": "Lawrence Stroll",
//       "director": "Mike Krack",
//       "technical_manager": "Andrew Green",
//       "chassis": "AMR22",
//       "engine": "Mercedes",
//       "tyres": "Pirelli"
//     },
//     {
//       "id": 18,
//       "name": "Alfa Romeo",
//       "logo": "https://media.api-sports.io/formula-1/teams/18.png",
//       "base": "Hinwil, Switzerland",
//       "first_team_entry": 1993,
//       "world_championships": 0,
//       "highest_race_finish": "{number: 1, position: 1}",
//       "pole_positions": 1,
//       "fastest_laps": 5,
//       "president": "Pascal Picci",
//       "director": "Frédéric Vasseur",
//       "technical_manager": "Jan Monchaux",
//       "chassis": "C42",
//       "engine": "Ferrari",
//       "tyres": "Pirelli"
//     }
//   ]
// }
