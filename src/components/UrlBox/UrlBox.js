import React from 'react';
import './UrlBox.css';

const UrlBox = ({OnInputChange, OnButtonSubmit}) => {
	return (
		<div>
			<div className='center f3'>
				<p> {'This will tell you faces about people'} </p>
			</div>
			<div className='center'>
				<div className='pa4 shadow-5 br3 bg-box' >
					<input className='pa2 f3 br2 w-70' type='text' name='' onChange={OnInputChange}/>
					<button 
					className='ph3 pv2 pointer white bg-navy f3 grow br2 w-15'
					onClick={OnButtonSubmit}
					> Detect </button>
				</div>
			</div>
		</div>	
	)
}


export default UrlBox;