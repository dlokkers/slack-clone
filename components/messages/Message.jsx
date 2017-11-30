import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';

class Message extends React.Component{
	render(){
		let {message} = this.props;
		let date = message.createdAt;
		let createdAt = fecha.format(date, 'HH:mm:ss DD/MM/YYYY');

		return (
			<li className='message'>
				<div className='author'>
					<strong>{message.author}</strong>
					<i className='timestamp'>{createdAt}</i>
				</div>
				<div className='body'>{message.body}</div>
			</li>
		)
	}
}

Message.propTypes = {
	message: PropTypes.object.isRequired,
}

export default Message
