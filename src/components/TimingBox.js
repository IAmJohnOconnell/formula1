import React from "react"
import styles from "./TimingBox.module.css"

const TimingBox = ({ DriverQualifyingResults, session }) => {
	return (
		<div className={styles.timingBox}>
			<p className={styles.session}>{session}:</p>
			<div className={styles.timingBoxContent}>
				<p>
					{DriverQualifyingResults
						? DriverQualifyingResults
						: "Click a driver to view times"}
				</p>
			</div>
		</div>
	)
}

export default TimingBox
