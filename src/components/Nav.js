import React from "react"
import styled from "styled-components"
import { BrowserRouter, Route, Link } from "react-router-dom"

const NavContainer = styled.nav`
	max-width: 225px;
	width: 100%;
	background-color: #33363d;
	border: 1px solid #e10600;
	border-left: none;
	border-top: none;
	font-size: 1em;
	display: none;

	div {
		padding: 2em 0.75em 0px;
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
		height: 100vh;
	}

	a {
		background-color: #24262b;
		width: 100%;
		text-align: center;
		padding: 0.75em;
		border: 1px solid transparent;
		color: #f1f1f1;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 10px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
	}

	a:hover {
		border: 1px solid #e10600;
	}

	a:active {
		background-color: #e10600;
	}

	@media screen and (min-width: 600px) {
		display: inline-block;
	}
`

const Nav = ({ isVisible }) => {
	return (
		<NavContainer>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/teams'>Teams</Link>
				<Link to='/drivers'>Drivers</Link>
				<Link to='/standings'>Standings</Link>
				<Link to='/results'>Results</Link>
			</div>
		</NavContainer>
	)
}

export default Nav
