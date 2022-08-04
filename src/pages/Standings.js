import React from "react"
import styled from "styled-components"
import PageContainer from "../components/PageContainer"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

const StandingsPage = styled.div``

const Standings = ({
	postRaceDriverStandings,
	results,
	selectedRaceWeekend,
	photos,
}) => {
	return (
		<StandingsPage>
			<SectionHeader
				title={"World Drivers Championship Standings"}
				subtitle={"Who will claim victory and make history?"}
			/>
			<PageContainer>
				{postRaceDriverStandings &&
					postRaceDriverStandings.map((result) => {
						let driver = result.Driver
						let driverTeaminfo = result.Constructors[0]
						let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`
						let driverphoto = `${driver.givenName}${driver.familyName}`
							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")

						return (
							<Card
								key={result.position}
								text={driverName}
								photo={photos.driver[driverphoto]}
								team={driverTeaminfo}
								number={result.position}
							/>
						)
					})}
			</PageContainer>
		</StandingsPage>
	)
}

export default Standings
