import React, { Component, Fragment } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Input, Stack, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import AppURL from '../../Routes/AppURL';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRegex from '../../Routes/AppRegex';
import {Button, TextField} from "@mui/material";

class SendMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactInfo: [],
			btnText: 'Send',
			toastStatus: false,
		};
	}

	sendContact = () => {
		this.setState({
			btnText: (
				<div className={'d-flex justify-content-center align-items-center'}>
					<Spinner
						animation="grow"
						as="span"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					Sending
				</div>
			),
		});
		let name = document.getElementById('nameID').value;
		let email = document.getElementById('emailID').value;
		let text = document.getElementById('msgID').value;
		let sendJSON = {
			name: name,
			email: email,
			msg: text,
		};

		setTimeout(() => {
			this.setState({ btnText: 'Sending' });

			if (AppRegex.emailRegex.test(email) && AppRegex.nameRegex.test(name)) {
				axios.post(AppURL.sendContact, sendJSON).then(response => {
					if (response.status == 200) {
						toast.success('Contact Send success!', {
							position: 'bottom-center',
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
					}
					this.setState({ btnText: 'Send' });
				});
			} else {
				toast.error('Right Email and Name Require', {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}, 500);
		this.setState({ btnText: 'Send' });
	};

	render() {
		return (
			<Fragment>
				<Card className={'border-0 m-0 p-0'}>
					<div className={"px-2 py-3"}>
						<div className={'h2Text text-center text-capitalize'} style={{ width: '100%', color:"#56ACD4"}}>
							Message Us
						</div>
						<Stack className={'p-3'}>

							<TextField id={'nameID'} label="Name" variant="outlined" className={'bg-white'}/>

							<TextField id={'emailID'} label="Email" variant="outlined" className={'bg-white'}/>

							<TextField id={'msgID'} label="Your messege" multiline rows={4}/>
							<Button variant={"contained"} style={{background:"#56B6E2"}} onClick={this.sendContact}>{this.state.btnText}</Button>
							<ToastContainer />
						</Stack>
					</div>

				</Card>

				{this.state.toastStatus}
			</Fragment>
		);
	}
}

export default SendMessage;
