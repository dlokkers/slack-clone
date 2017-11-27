import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';

class MessageSection extends Component {
	render(){
		return(
			<div className='support panel panel-primary'>
				<div className='panel-heading'>
					<strong>Messages</strong>
				</div>
				<div className='panel-body messages'>
					<MessageList {...this.props} />
					<MessageForm {...this.props} />
				</div>	
			</div>
		)
	}
}

MessageSection.propTypes = {
	messages: PropTypes.array.isRequired,
	setMessage: PropTypes.func.isRequired,
	addMessage: PropTypes.func.isRequired,
	activeMessage: PropTypes.object.isRequired
}

export default MessageSection
