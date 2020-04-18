import React from 'react';
import logo from './circuit.png'
import Tilt from 'react-tilt'
import './Logo.css';

const Logo = () => {
	return(
		<div className='pa3 f3'>
			<Tilt className="Tilt shadow-3" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner tc ">
					<img style={{paddingTop:"30px"}} src={logo} alt='logo' 	width='100px' height = '100px' />
				</div>
			</Tilt>
			
		</div>
	)
}

export default Logo