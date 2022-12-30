import React, { Component, Fragment } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import TopBanner from '../../Components/TopBanner';
import ScheduleTable from './ScheduleTable';
import FooterNav from '../../Components/FooterNav';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";
import {Container} from "react-bootstrap";
class SchedulePage extends Component {
	constructor() {
		super();
		this.state={
			seo:{title:"Schedule Page"}
		}
	}

	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getSchedulePageSEO)
			.then(response=>{
				this.setState({seo:response.data})
			})
	}

	render() {
		let seo = this.state.seo;
		return (
			<Fragment>
				<AppHead pageTitle={seo.title} seoTitle={seo.seo_title} pageDescription={seo.description} seoDescription={seo.seo_description}/>
				<HeaderNav />
				<TopBanner
					bannerTitle="Training Schedule"
					bannerDescription="An innovator in best-practices training products and services, Radschool delivers significant improvements to the results companies care about most."
				/>
				<Container>
					<ScheduleTable />
				</Container>
				<FooterNav />
			</Fragment>
		);
	}
}

export default SchedulePage;
