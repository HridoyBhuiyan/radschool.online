import React, { Component, Fragment } from 'react';
import HeaderNav from '../../Components/HeaderNav';
import FooterNav from '../../Components/FooterNav';
import TopBanner from '../../Components/TopBanner';
import { Col, Row, Container } from 'react-bootstrap';
import Address from './Address';
import SendMessage from './SendMessage';
import Loading from '../../Components/Loading';
import axios from "axios";
import AppURL from "../../Routes/AppURL";
import AppHead from "../../Components/AppHead";
import {Card} from "@mui/material";
class AboutPage extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			seo:{title:"Contact Page"}
		};
	}

	componentDidMount() {
		window.scroll(0, 0);
		axios.get(AppURL.getContactPageSEO)
			.then(response=>{
				this.setState({
					seo:response.data,
					loading:false
				})
			})

	}

	render() {
		let seo = this.state.seo;
		if (this.state.loading == true) {
			return (
				<Fragment>
					<HeaderNav />
					<Loading />
					<FooterNav />
				</Fragment>
			);
		} else {


			return (
				<Fragment>
					<AppHead pageTitle={seo.title} seoTitle={seo.seo_title} pageDescription={seo.description} seoDescription={seo.seo_description}/>
					<HeaderNav />
					<div>
						<TopBanner
							bannerTitle="Contact Us"
							bannerDescription="We love to see you to contact with us. You are mostly welcome here. Lets make a quick connection."
						/>
						<Container className={'my-5 py-2 '}>
							<Card className={"shadow-lg"}>
								<Row>
									<Col lg={6} md={6} xl={6} xs={12} sm={12}>
										<Address />

									</Col>
									<Col lg={6} md={6} xl={6} xs={12} sm={12}>
										<SendMessage />
									</Col>
								</Row>
							</Card>

						</Container>
					</div>
					<FooterNav />
				</Fragment>
			);
		}
	}
}

export default AboutPage;
