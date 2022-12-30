import React, { Component, Fragment } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import EventBody from './EventBody';
import FooterNav from '../../Components/FooterNav';
import axios from "axios";
import AppURL from "../../Routes/AppURL";

class EventPage extends Component {

	componentDidMount() {
		window.scroll(0, 0);
		axios.get("https://admin.radschool.online/api/radUserAbout/3")
			.then(response=>console.log(response.data))
	}

	render() {
		return (
			<Fragment>
				<HeaderNav />
				<EventBody />
				<FooterNav />
			</Fragment>
		);
	}
}

export default EventPage;
