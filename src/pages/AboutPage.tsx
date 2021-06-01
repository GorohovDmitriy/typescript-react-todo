import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
	const history = useHistory()

	return (
		<>
			<h1 className='h1'>Information page</h1>
			<p>
				Этот список задач сдлан на TypeScript + React
			</p>
			<button className='btn' onClick={() => history.push('/')}>
				Обратно к списку дел
			</button>
		</>
	)
}
