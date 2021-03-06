import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component{
	onSubmit(e){
		e.preventDefault();
		const node = this.refs.message;
		const messageName = node.value;
		this.props.addMessage(messageName);
		node.value = '';
	}
	render(){
		let input;
		if(this.props.activeChannel.id !== undefined){
			input= (
				<input
					ref='message'
					type='text'
					className='form-control'
					placeholder='Add Message...' />
			)
		}
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
				<div className='form-group'>
					{input}
				</div>
			</form>
		)
	}
}

MessageForm.propTypes = {
	addMessage: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
}

export default MessageForm
