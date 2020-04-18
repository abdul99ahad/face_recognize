import React from 'react';

const Rank = ({name,entries}) => {
	return(
		<div>
			<div className='f3 center white'> {`Hi ${name}, Your entry count is...`} </div>
			<div className='f1 center white'> {entries} </div>
		</div>
	)
}

export default Rank;