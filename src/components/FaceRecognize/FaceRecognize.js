import React from 'react';
import './FaceRecognize.css';

const FaceRecognize = (props) => {
	return(
		<div className='center'>
			<div className='center absolute'>
				<img id='image' className='pa3' alt='' src={props.Image} width='500px' height='500px'/>
				<div className='bounding-box center' style={{top:props.dimensions.top, bottom:props.dimensions.bottom,right:props.dimensions.right,left:props.dimensions.left}}></div>
			</div>
		</div>
	)
}
export default FaceRecognize;