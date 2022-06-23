import React from "react"
import styles from "./Nav.module.css"

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<li>Home</li>
			<li>Next</li>
			<li>Last</li>
		</nav>
	)
}

export default Nav
