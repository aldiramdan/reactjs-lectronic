import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../store/reducer/user'
import Logo from './logoHeader.png'
import BackLogo from './back.png'
import FlashLogo from './flash-logo.png'

import style from './header.module.css'

function Header() {
	const dispatch = useDispatch()
	const { isAuth } = useSelector((state) => state.users)
	const history = useNavigate()

	const handleHistory = ()=>{
		history(-1)
	}

	return (
		<>
		{!isAuth ? (
			<Navbar expand="lg" className={style.navbar} variant="light">
			<Container>
				<>
				<Navbar.Brand href="/">
					<img
						width="200"
						height="auto"
						className="d-inline-block align-top"
						src={Logo}
						alt="logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={style.nav}>
						<Link to="/" className={style.navbar2}>
							Home
						</Link>
						<Link to="/products" className={style.navbar2}>
							Products
						</Link>
						<Link to="#community" className={style.navbar2}>
							Community
						</Link>
						<Link to="#About" className={style.navbar2}>
							About
						</Link>
						<Link to="/login" className={style.navbar2}>
							<Button className={style.button} variant="primary">
							Login
							</Button>
						</Link>
						<Link to="/register" className={style.navbar2}>
							<Button className={style.button} variant="primary">
							Sign Up
							</Button>
						</Link>
					</Nav>
				</Navbar.Collapse>
				</>
			</Container>
			</Navbar>
		) : (
			<>
			<div className={style.navbar3} />
			<Navbar className={style.navbar} variant="light">
				<Container>
					<Navbar.Brand href="/">
						<Button onClick={handleHistory} className={style.but_back}>
							<img src={BackLogo} alt="" />
						</Button>
					</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Dropdown>
						<Dropdown.Toggle
							className={style.but_user}
							variant="success"
							id="dropdown-basic"
							>
							<img src={FlashLogo} alt="" />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<div className={style.avatar}>
								<img
									src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-512.png"
									alt=""
									width="45px"
								/>
							</div>
							<Dropdown.Item href="/cart">Cart</Dropdown.Item>
							<Dropdown.Item href="/history">History</Dropdown.Item>
							<Dropdown.Item href="/profile">Profile</Dropdown.Item>
							<Dropdown.Item onClick={() => dispatch(logout())}>
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.Collapse>
				</Container>
			</Navbar>
			</>
		)}
		</>
	)
}

export default Header
