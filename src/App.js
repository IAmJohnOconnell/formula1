import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Drivers from "./pages/Drivers";
import Standings from "./pages/Standings";
import Nav from "./components/Nav";
import TeamInfo from "./pages/TeamInfo";
import DriverInfo from "./pages/DriverInfo";
import Results from "./pages/Results";
import RaceResults from "./pages/RaceResults";
import Races from "./pages/Races";
import {
  fetchConstructorStandings,
  fetchDriverData,
  fetchRaceResults,
  fetchRaces,
} from "./services/apiService";
import RaceInfo from "./pages/RaceInfo";

// There is no API for this data, so it needs to be entered and maintained manually.
let constructorProfileData = {
  redbull: {
    teamName: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    teamPrincipal: "Christian Horner",
    technicalChief: "Pierre Waché",
    chassis: "RB21",
    powerUnit: "Honda RBPT",
    firstEntry: "1997",
    worldChampionships: "6",
    drivers: [
      { name: "Max Verstappen", number: "1" },
      { name: "Yuki Tsunoda", number: "22" },
    ],
  },
  mclaren: {
    teamName: "McLaren Formula 1 Team",
    base: "Woking, United Kingdom",
    teamPrincipal: "Andreas Seidl",
    technicalChief: "Peter Prodromou / Neil Houldey",
    chassis: "MCL39",
    powerUnit: "Mercedes",
    firstEntry: "1966",
    worldChampionships: "9",
    drivers: [
      { name: "Lando Norris", number: "4" },
      { name: "Oscar Piastri", number: "81" },
    ],
  },
  ferrari: {
    teamName: "Scuderia Ferrari HP",
    base: "Maranello, Italy",
    teamPrincipal: "Frederic Vasseur",
    technicalChief: "Loic Serra / Enrico Cardile",
    chassis: "SF-75",
    powerUnit: "Ferrari",
    firstEntry: "1950",
    worldChampionships: "16",
    drivers: [
      { name: "Charles Leclerc", number: "16" },
      { name: "Lewis Hamilton", number: "44" },
    ],
  },
  mercedes: {
    teamName: "Mercedes-AMG Petronas Formula One Team",
    base: "Brackley, United Kingdom",
    teamPrincipal: "Toto Wolff",
    technicalChief: "James Allison",
    chassis: "W16",
    powerUnit: "Mercedes",
    firstEntry: "1970",
    worldChampionships: "8",
    drivers: [
      { name: "Andrea Kimi Antonelli", number: "63" },
      { name: "George Russell", number: "12" },
    ],
  },
  alpinef1team: {
    teamName: "BWT Alpine Formula One Team",
    base: "Enstone, United Kingdom",
    teamPrincipal: "Oliver Oakes",
    technicalChief: "David Sanchez",
    chassis: "A525",
    powerUnit: "Renault",
    firstEntry: "1986",
    worldChampionships: "2",
    drivers: [
      { name: "Pierre Gasly", number: "10" },
      { name: "Franco Colapinto", number: "43" },
    ],
  },
  racingbulls: {
    teamName: "Visa Cash App Racing Bulls Formula One Team",
    base: "Faenza, Italy",
    teamPrincipal: "Laurent Mekies",
    technicalChief: "Jody Egginton",
    chassis: "TBC",
    powerUnit: "Honda RBPT",
    firstEntry: "1985",
    worldChampionships: "0",
    drivers: [
      { name: "Isack Hadjar", number: "6" },
      { name: "Liam Lawson", number: "30" },
    ],
  },
  sauber: {
    teamName: "Stake F1 Team Kick Sauber",
    base: "Hinwil, Switzerland",
    teamPrincipal: "Mattia Binotto",
    technicalChief: "James Key",
    chassis: "TBC",
    powerUnit: "Ferrari",
    firstEntry: "1993",
    worldChampionships: "0",
    drivers: [
      { name: "Nico Hulkenberg", number: "27" },
      { name: "Gabriel Bortoleto", number: "5" },
    ],
  },
  williams: {
    teamName: "Williams Racing",
    base: "Grove, United Kingdom",
    teamPrincipal: "James Vowles",
    technicalChief: "Pat Fry",
    chassis: "FW47",
    powerUnit: "Mercedes",
    firstEntry: "1978",
    worldChampionships: "9",
    drivers: [
      { name: "Alexander Albon", number: "23" },
      { name: "Carlos Sainz", number: "55" },
    ],
  },
  haasf1team: {
    teamName: "MoneyGram Haas F1 Team",
    base: "Kannapolis, United States",
    teamPrincipal: "Ayao Komatsu",
    technicalChief: "Andrea De Zordo",
    chassis: "TBC",
    powerUnit: "Ferrari",
    firstEntry: "2016",
    worldChampionships: "0",
    drivers: [
      { name: "Esteban Ocon", number: "31" },
      { name: "Oliver Bearman", number: "87" },
    ],
  },
  astonmartin: {
    teamName: "Aston Martin Aramco Formula One Team",
    base: "Silverstone, United Kingdom",
    teamPrincipal: "Andy Cowell",
    technicalChief: "Enrico Cardile",
    chassis: "AMR25",
    powerUnit: "Mercedes",
    firstEntry: "2018",
    worldChampionships: "0",
    drivers: [
      { name: "Fernando Alonso", number: "14" },
      { name: "Lance Stroll", number: "18" },
    ],
  },
};

function App() {
  const [driverData, setdriverData] = useState();
  const { pathname } = useLocation();
  const [constructorProfiles, setConstructorProfiles] = useState();
  const [constructorStandings, setConstructorStandings] = useState();
  const [raceResults, setRaceResults] = useState();
  const [races, setRaces] = useState();

  //Get Driver Data
  useEffect(() => {
    const getDriverData = async () => {
      try {
        let data = await fetchDriverData();
        setdriverData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDriverData();
  }, []);

  //Get Constructor Standings
  useEffect(() => {
    const getConstructorStandings = async () => {
      try {
        let data = await fetchConstructorStandings();
        setConstructorStandings(data);
      } catch (error) {
        console.error(error);
      }
    };
    getConstructorStandings();
  }, []);

  //Get Constructor Profiles
  useEffect(() => {
    const constructorIdMap = {
      red_bull: "redbull",
      mclaren: "mclaren",
      ferrari: "ferrari",
      mercedes: "mercedes",
      alpine: "alpinef1team",
      rb: "racingbulls",
      sauber: "sauber",
      williams: "williams",
      haas: "haasf1team",
      aston_martin: "astonmartin",
    };

    const constructorBios = {
      red_bull: `Red Bull were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004. Nonetheless, the scale of their success over the following decade was staggering. After a first podium in 2006, the team hit their stride in 2009, claiming six victories and second in the constructors' standings. Over the next four seasons they were a tour de force, claiming consecutive title doubles between 2010 and 2013, with Sebastian Vettel emerging as the sport's youngest quadruple champion. Now they are recapturing that glory with an equally exciting talent – one named Max Verstappen…`,
      mclaren: `Since entering the sport in 1966 under the guidance and restless endeavour of eponymous founder Bruce, McLaren's success has been nothing short of breathtaking. Five glittering decades have yielded countless victories, pole positions and podiums, not to mention nine constructors' championships. What's more, some of the sport's greatest drivers made their names with the team, including Emerson Fittipaldi, Ayrton Senna, Mika Hakkinen and Lewis Hamilton...`,
      ferrari: `For many, Ferrari and Formula 1 racing have become inseparable. The only team to have competed in every season since the world championship began, the Prancing Horse has grown from the humble dream of founder Enzo Ferrari to become one of the most iconic and recognised brands in the world. Success came quickly through the likes of Alberto Ascari and John Surtees, and continued – in amongst leaner times – with Niki Lauda in the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed a then unprecedented five consecutive title doubles, securing their status as the most successful and decorated team in F1 history...`,
      mercedes: `Mercedes’ modern F1 revival started with the creation of a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order. The team generated huge excitement from the off with the sensational return of Michael Schumacher, but headlines soon followed on track: three podiums in their debut season, all via Nico Rosberg - who then claimed a breakthrough pole/victory double at China in 2012. The following season he was paired with Lewis Hamilton, the duo going on to stage some epic title battles as the Silver Arrows swept all before them to become one of the most dominant forces of the modern F1 era – until Red Bull came and stole that crown. Nevertheless, with proven race-winner George Russell now partnered by rising star Kimi Antonelli, Mercedes remain very much one of the teams to beat…`,
      alpine: `Alpine may be a relatively new name to Formula 1, but Renault’s famous sportscar arm has plenty of motorsport heritage. The 2021 rebrand of the team marked the next step in Renault’s F1 revival, begun in 2016 with the takeover of the then-Lotus squad. Already race winners in their new guise, regular podiums and a tilt at the title must be their next target…`,
      rb: `Established in 2006 as a squad in which young drivers from Red Bull’s prodigious talent pool could cut their F1 teeth, Racing Bulls – originally named Toro Rosso, then AlphaTauri, then RB – were formed from the ashes of the plucky Minardi team. Sebastian Vettel gave validity to the approach almost immediately, delivering a fairy-tale win in 2008, before going on to enjoy world championship success with parent team Red Bull Racing. Today the ethos of nurturing talent still holds true, though the Italian squad are no longer simply a ‘B team’ but a constructor in their own right...`,
      sauber: `Having enjoyed considerable success in world sportscars, where he helped nurture the emerging talents of future F1 stars Michael Schumacher and Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1 in 1993.

The team has since established itself as a mainstay of the grid, becoming race winners under BMW’s brief ownership, and developing a well-earned reputation not only for producing competitive cars, but also for developing young drivers.

In recent seasons they raced under the Alfa Romeo name - and in 2026 will become the works Audi squad - but since 2024 a new title sponsor has brought a new identity to the famous Swiss team.`,
      williams: `Driven on by the brilliance and passion of the late Sir Frank Williams, Williams grew from humble beginnings to become a Formula 1 behemoth, unrivalled by all except Ferrari and McLaren in terms of enduring success. Over the past four decades the team has racked up Grand Prix wins and championship glory, and in the process nurtured some of the greatest talents in the sport, both in and out the cockpit. And, following the Williams family's decision to step aside after the 2020 sale of the team to Dorilton Capital, a new era has begun...`,
      haas: `The youngest team on the grid, Haas made their highly impressive debut in 2016, and in the process became the first all-American-led F1 squad in three decades. Founded by industrialist Gene Haas, they are based in the United States on the same Kannapolis, North Carolina facility as his championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing. The Ferrari-powered team also have a UK factory in Banbury…`,
      aston_martin: `Aston Martin’s original Formula 1 foray – over half a century ago – lasted just five races. This time, though, it’s serious. This F1 squad are no strangers to success, having won in their original guise of Jordan and most recently as Racing Point in 2020. Renowned for their ability to punch above their weight, and now with a two-time champion leading their driver line-up - and F1's most famous designer coming onboard in 2025 - Aston Martin are very much a team to watch…`,
    };

    const enrichedConstructors =
      constructorStandings &&
      constructorStandings.map((constructor) => {
        const profileKey =
          constructorIdMap[constructor.Constructor.constructorId];
        return profileKey && constructorProfileData[profileKey]
          ? {
              ...constructor,
              ...constructorProfileData[profileKey],
              bio: constructorBios[profileKey],
            }
          : constructor;
      });

    setConstructorProfiles(enrichedConstructors);
  }, [constructorStandings]);

  //Get Race Results
  useEffect(() => {
    const getRaceResults = async () => {
      try {
        let data = await fetchRaceResults();
        setRaceResults(data);
      } catch (error) {
        console.error("Failed to get race results", error);
      }
    };
    getRaceResults();
  }, []);

  //Get Races
  useEffect(() => {
    const getRaces = async () => {
      try {
        let data = await fetchRaces();
        setRaces(data);
      } catch (error) {
        console.error("Failed to fetch Races", error);
      }
    };
    getRaces();
  }, []);

  return (
    <div className="App">
      <div className="AppContainer">
        {pathname === "/" ? null : <Nav className="navContainer" />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="teams"
            element={<Teams constructors={constructorProfiles} />}
          />
          <Route path="teams/:teamId" element={<TeamInfo />} />
          <Route path="drivers" element={<Drivers drivers={driverData} />} />
          <Route path="drivers/:driverId" element={<DriverInfo />} />
          <Route
            path="standings"
            element={
              <Standings
                driverData={driverData}
                constructorStandings={constructorStandings}
              />
            }
          />
          <Route
            path="results"
            element={<Results raceResults={raceResults} />}
          />
          <Route path="results/:raceName" element={<RaceResults />} />
          <Route path="races" element={<Races races={races} />} />
          <Route path="races/:raceName" element={<RaceInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
