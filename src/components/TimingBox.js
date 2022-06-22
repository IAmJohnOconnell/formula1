import React from "react"

const TimingBox = ({ DriverQualifyingResults, session }) => {
	return (
		<div className='timingBox'>
			<div className='timingBox-header'>{session}</div>
			<div className='timingBox-content'>
				{DriverQualifyingResults
					? DriverQualifyingResults
					: "Click a driver to view times"}
			</div>
		</div>
	)
}

export default TimingBox
