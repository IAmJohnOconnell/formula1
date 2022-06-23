import React from "react"
import styles from "./TimingBox.module.css"

const TimingBox = ({ DriverQualifyingResults, session }) => {
	return (
		<div className={styles.timingBox}>
			<div>{session}</div>
			<div className={styles.timingBoxContent}>
				{DriverQualifyingResults
					? DriverQualifyingResults
					: "Click a driver to view times"}
			</div>
		</div>
	)
}

export default TimingBox
