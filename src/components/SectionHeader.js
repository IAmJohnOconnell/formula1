import React from "react"
import styled from "styled-components"

const SectionHeaderComponent = styled.div`
	h1 {
		font-size: 1.5rem;
		color: white;
	}

	h2 {
		max-width: 55ch;
		padding-top: 1.5rem;
		color: #919bb3;
		font-size: 1rem;
		font-weight: normal;
	}

	margin-bottom: 2rem;
`

const SectionHeader = ({ title, subtitle }) => {
	return (
		<SectionHeaderComponent>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</SectionHeaderComponent>
	)
}

export default SectionHeader
