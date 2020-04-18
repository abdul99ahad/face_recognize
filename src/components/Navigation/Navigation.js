import React from 'react';
import 'tachyons';

class Navigation extends React.Component {
	render() {
	return (
		<div style={{display:'flex', justifyContent:'flex-end'}}> 
			<p onClick={()=> this.props.onRouteChange('signin')} className='f3 link underline pointer dim'> Sign Out </p>
		</div>
	)
	}

}

export default Navigation;	