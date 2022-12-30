import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Fragment } from 'react';
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import AppURL from "../Routes/AppURL";

const HeaderNav = () => {
	const navigator = useNavigate();
	const location = useLocation();
	return (
		<Fragment>
			<Navbar collapseOnSelect expand="lg" style={{ background: 'rgba(69,175,223,0.91)' }} fixed={'top'}>
				<Container>
					<Navbar.Brand href="#home">
						<Link to={'/'}>
							<img src={AppURL.rootDomain+"images/logo.png"} width={150} height={50} alt={'Logo'} className={'m-0 p-0'}/>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav className={'navItem'}>
							<NavLink to={'/'}>
								<div className={'nav nav-link navItem'}>Home</div>
							</NavLink>
							<NavLink to={'/schedule'}>
								<div className={'nav nav-link navItem'}>Schedule</div>
							</NavLink>




							<div className={'dropdownParent'}>
								<div className={location.pathname === '/courses' ? 'active nav nav-link navItem dropdownMain' : "nav nav-link navItem dropdownMain"} onClick={()=>navigator('/courses')}>Courses</div>
								<div className={'dropdownChild'}>
									<NavLink to={'/course/category/industrial'}>Industrial</NavLink>
									<NavLink to={'/course/category/medical'}>Medical</NavLink>
									<NavLink to={'/course/category/cbrne'}>CBRNE</NavLink>
									<NavLink to={'/course/category/hse'}>HSE</NavLink>
								</div>
							</div>




							<NavLink to={'/events'}>
								<div className={'nav nav-link navItem'}>Events</div>
							</NavLink>
							<NavLink to={'/contact'}>
								<div className={'nav nav-link navItem'}>Contact us</div>
							</NavLink>
							<NavLink to={'/about'}>
								<div className={'nav nav-link navItem'}>About Us</div>
							</NavLink>
							<NavLink to={'/policy'}>
								<div className={'nav nav-link navItem'}>Policy</div>
							</NavLink>
							<NavLink to={'/faq'}>
								<div className={'nav nav-link navItem'}>FAQ</div>
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default HeaderNav;
