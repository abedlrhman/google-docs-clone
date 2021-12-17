import React, { useContext } from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { usersData } from '../components/Home';


function MainLayout({children}) {

	const data = useContext(usersData)
	
	return (
		<>
			<Navbar bg="primary" expand="lg">
				<Container>
					<Navbar.Brand href="#" style={{fontWeight: 'bold'}}>Docs</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link colors="light">
								<Link to='/' className="navLink">
								Home
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to={`edit/${data.length + 1}`} className="navLink">
									New
								</Link>
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form>
						<Button>
							<Nav.Link href="/signup" >
								<Link to='/signup' className="navLink">
									Sign Up
								</Link>
							</Nav.Link>
						</Button>
						<Button>
							<Nav.Link href="/signup" >
								<Link to='/login' className="navLink">
									Login
								</Link>
							</Nav.Link>
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<>
				{children}
			</>
		</>
	)
}

export default MainLayout
