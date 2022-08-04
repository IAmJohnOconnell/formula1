import React from "react"
import styled from "styled-components"
import PageContainer from "../components/PageContainer"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

const DriversPage = styled.div``

const Drivers = ({ photos, drivers }) => {
	return (
		<DriversPage>
			<SectionHeader
				title={"F1 Drivers 2022"}
				subtitle={"This seasons Driver line-up"}
			/>
			<PageContainer>
				{drivers &&
					drivers.map((driver) => {
						let driverInfo = driver.driverInfo
						let driverTeaminfo = driver.team
						let driverName = `${driverInfo.givenName.normalize()} ${driverInfo.familyName.normalize()}`
						let driverphoto = `${driverInfo.givenName}${driverInfo.familyName}`
							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")

						return (
							<Card
								text={driverName}
								team={driverTeaminfo}
								photo={photos.driver[driverphoto]}
								number={driverInfo.permanentNumber}
								key={parseInt(driverInfo.permanentNumber)}
								type='drivers'
							/>
						)
					})}
			</PageContainer>
		</DriversPage>
	)
}

export default Drivers
