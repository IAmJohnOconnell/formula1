import React from "react"
import styled from "styled-components"

const StyledUpNext = styled.div``

const Label = styled.p`
	color: #e10600;
	font-size: 0.75em;
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: 0.25em;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 10px;
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	padding: 0.75em;
	border: 1px solid #e10600;
	border-radius: 0px 10px 10px 0px;
`

const Race = styled.p`
	color: white;
	text-shadow: 0px 2px 3px black;
`
const Round = styled.p`
	color: #e10600;
	text-align: center;
`

const Icon = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: #e10600;
	padding: 0.75em;
	border-radius: 10px 0px 0px 10px;
	border: 1px solid none;
`

const UpNext = () => {
	return (
		<StyledUpNext>
			<Label>Up Next:</Label>
			<Container>
				<Icon>V</Icon>
				<Wrapper>
					<Race>France 2022</Race>
					<Round>Round 1</Round>
				</Wrapper>
			</Container>
		</StyledUpNext>
	)
}

export default UpNext
