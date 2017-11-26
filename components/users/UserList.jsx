import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component{
	render(){
		<ul>{
			this.props.users.map( user => {
				return <User
					key={user.id}	
					user={user}
					{...this.props}
				/>
			})
		}</ul>
	}
}


UserList.PropTypes = {
	users: PropTypes.array.isRequired,
	setUser: PropTypes.func.isRequired,
	activeUser: PropTypes.object.isRequired
}

export default UserList
