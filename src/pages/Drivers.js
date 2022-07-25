import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
// Driver Photos
import MVerstappen from "../assets/drivers/maxverstappen.png"
import SPerez from "../assets/drivers/sergioperez.png"
import CLeclerc from "../assets/drivers/charlesleclerc.png"
import CSainz from "../assets/drivers/carlossainz.png"
import LHamilton from "../assets/drivers/lewishamilton.png"
import NLatifi from "../assets/drivers/nicholaslatifi.png"
import FAlonso from "../assets/drivers/fernandoalonso.png"
import LStroll from "../assets/drivers/lancestroll.png"
import GRussell from "../assets/drivers/georgerussell.png"
import ZGuanyu from "../assets/drivers/zhouguanyu.png"
import EOcon from "../assets/drivers/estebanocon.png"
import KMagnussen from "../assets/drivers/kevinmagnussen.png"
import DRicciardo from "../assets/drivers/danielricciardo.png"
import LNorris from "../assets/drivers/landonorris.png"
import SVettel from "../assets/drivers/sebastianvettel.png"
import AAlbon from "../assets/drivers/alexalbon.png"
import MSchumacher from "../assets/drivers/mickschumacher.png"
import PGasly from "../assets/drivers/pierregasly.png"
import YTsunoda from "../assets/drivers/yukitsunoda.png"
import VBottas from "../assets/drivers/valtteribottas.png"

const DriversPage = styled.div``

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 100%;
	width: 100%;
	gap: 2em;
	scroll-behavior: smooth;
`

const Teams = () => {
	return (
		<DriversPage>
			<SectionHeader
				title={"F1 Drivers 2022"}
				subtitle={"This seasons Driver line-up"}
			/>
			<PageContainer>
				<Card text='Max Verstappen' photo={MVerstappen} />
				<Card text='Sergio Perez' photo={SPerez} />
				<Card text='Charles Leclerc' photo={CLeclerc} />
				<Card text='Carlos Sainz' photo={CSainz} />
				<Card text='Lewis Hamilton' photo={LHamilton} />
				<Card text='George Russell' photo={GRussell} />
				<Card text='Lando Norris' photo={LNorris} />
				<Card text='Daniel Ricciardo' photo={DRicciardo} />
				<Card text='Fernando Alonso' photo={FAlonso} />
				<Card text='Esteban Ocon' photo={EOcon} />
				<Card text='Pierre Gasly' photo={PGasly} />
				<Card text='Yuki Tsunoda' photo={YTsunoda} />
				<Card text='Kevin Magnussen' photo={KMagnussen} />
				<Card text='Mick Schumacher' photo={MSchumacher} />
				<Card text='Valtteri Bottas' photo={VBottas} />
				<Card text='Zhou Guanyu' photo={ZGuanyu} />
				<Card text='Lance Stroll' photo={LStroll} />
				<Card text='Sebastian Vettel' photo={SVettel} />
				<Card text='Alex Albon' photo={AAlbon} />
				<Card text='Nicholas Latifi' photo={NLatifi} />
			</PageContainer>
		</DriversPage>
	)
}

export default Teams
