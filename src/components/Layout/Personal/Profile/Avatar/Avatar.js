import React from 'react';

import classes from './Avatar.css';

const avatar = (props) => (
	<div>
		<img src = "https://media.licdn.com/dms/image/C5603AQFtt32uLQs7gg/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=q4oPdfkgf3XrwSrgWoBZJOsZ1tnGFvy-Qlpf4oxp0PQ" className = {classes.avatar} alt = "My face"/>
	</div>
);
export default avatar;