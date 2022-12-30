import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import AppRegex from '../../Routes/AppRegex';
import AppURL from '../../Routes/AppURL';
import Loading from '../../Components/Loading';

class PolicyBody extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			newsLetterBanner:"",
			isLoaded: false,
		};
	}

	componentDidMount() {
		axios.get(AppURL.getPolicyBanner).then(x => {
			this.setState({ data: x.data, isLoaded: true });
		});
		axios.get(AppURL.getSubBanner)
			.then(x=>{
				this.setState({
					newsLetterBanner:x.data
				})
			})
	}

	sendEmail = () => {
		let emailId = document.getElementById('emailId').value;
		let postURL = AppURL.postSubscriberData;
		let jsonData = { email: emailId };

		if (AppRegex.emailRegex.test(emailId)) {
			axios.post(postURL, jsonData).then(x => {
				if (x.status == 200) {
					toast.success('Subscribed', {
						position: 'bottom-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			});
		} else {
			toast.warn('Ensure right email', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	render() {
		let data = this.state.data;
		let dataBody = data.map(x => {
			return (
				<div key={1}>
					<h2 className={'my-2 py-2'}>{x.title}</h2>

					<div>{x.details}</div>
				</div>
			);
		});


		if (this.state.isLoaded == false) {
			return (
				<Fragment>
					<Loading />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<Card
						className={
							'seconderColor rounded-1 border-0 m-2 p-3 text-center text-light'
						}
					>
						<div>
							<h2>{this.state.newsLetterBanner.title}</h2>
							<p>
								{this.state.newsLetterBanner.details}
							</p>
							<TextField
								id="emailId"
								label="Email"
								className={'bg-light w-75 rounded-1 m-3 text-success'}
							/>
							<Button
								onClick={this.sendEmail}
								variant="contained"
								className={'primaryColor shadow-sm w-75 rounded-1 border-0 py-3'}
							>
								Submit
							</Button>
						</div>
					</Card>

					<Card
						className={' rounded-1 border-0 m-2 p-3 mt-4 text-center'}
						style={{ background: 'rgba(255,188,44,0.69)' }}
					>
						{dataBody}
					</Card>

					<ToastContainer />
				</Fragment>
			);
		}
	}
}

export default PolicyBody;
