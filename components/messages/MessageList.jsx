import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component{
	render(){
		return(
			<ul>{
				this.props.messages.map( chan =>{
					return <Message
						key={chan.id}
						message={chan}
						{...this.props}
				/>
				})
			}</ul>
		)
	}
}

MessageList.propTypes = {
	messages: PropTypes.array.isRequired,
	setMessage: PropTypes.func.isRequired,
	activeMessage: PropTypes.object.isRequired
}

export default MessageList 
