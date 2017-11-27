import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component{
	onClick(e){
		e.preventDefault();
		const {setMessage, message} = this.props;
		setMessage(message);
	}
	render(){
		const {message, activeMessage} = this.props;
		const active = message === activeMessage ? 'active' : '';

		return (
			<li className={active}>
				<a onClick={this.onClick.bind(this)}>
					{message.name}
				</a>
			</li>
		)
	}
}

Message.propTypes = {
	message: PropTypes.object.isRequired,
	setMessage: PropTypes.func.isRequired,
	activeMessage: PropTypes.object.isRequired
}

export default Message
