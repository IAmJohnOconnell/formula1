import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"

const DriversPage = styled.div``

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-flow: row;
	max-width: 100%;
	width: 100%;
	gap: 2em;
	scroll-behavior: smooth;
`

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
						let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`
						let driverphoto = `${driver.givenName}${driver.familyName}`

							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")
						return (
							<Card
								text={driverName}
								photo={photos[driverphoto]}
								key={parseInt(driver.permanentNumber)}
							/>
						)
					})}
			</PageContainer>
		</DriversPage>
	)
}

export default Drivers
