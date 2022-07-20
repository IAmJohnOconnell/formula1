import React from "react"

const Controls = ({
	handleSelectedRaceWeekendChange,
	handleSelectedSessionChange,
	races,
}) => {
	return (
		<div className='controls'>
			<select
				onChange={(e) => {
					handleSelectedSessionChange(e)
				}}>
				<option value={"qualifying"}>Qualifying</option>
				<option value={"results"}>Race</option>
				<option value={"standings"}>Standings</option>
			</select>

			<select
				onChange={(e) => {
					handleSelectedRaceWeekendChange(e)
				}}
				defaultValue={""}>
				<option value='' disabled>
					Select a Race
				</option>
				{races &&
					races.map((race) => {
						return (
							<option key={race.round} value={race.round}>
								{race.raceName}
							</option>
						)
					})}
			</select>
		</div>
	)
}

export default Controls
