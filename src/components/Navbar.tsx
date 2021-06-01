import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar: React.FC = () => (

	<nav>
		<div className='nav-wrapper teal px1'>
			<a href='/' className='brand-logo'>
				TypeScript + React
			</a>
			<ul id='nav-mobile' className='right hide-on-med-and-down'>
				<li>
					<NavLink to='/'>Todo list</NavLink>
				</li>
				<li>
					<NavLink to='/about'>Information</NavLink>
				</li>
			</ul>
		</div>
	</nav>
)
