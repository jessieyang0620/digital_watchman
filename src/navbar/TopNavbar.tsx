import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Views } from '../App';

export interface NavbarProps {
    loggedInAs: Views,
    clickedInfo: () => void
    clickedAbout: () => void
}
function TopNavbar(props: NavbarProps) {
    let profileName: String = "Not logged in";
    if (props.loggedInAs === Views.Worker) {
        profileName = "John Doe";
    }
    if (props.loggedInAs === Views.Boss) {
        profileName = "Beff Jezos";
    }
    return (
        <Navbar bg="light" variant="light" className="sticky-top">
            <Container>
                <Navbar.Brand>Digital Watchman</Navbar.Brand>
                <Navbar.Toggle />
                <Nav>
                    <Nav.Link onClick={props.clickedInfo}>Info</Nav.Link>
                    <Nav.Link onClick={props.clickedAbout}>About</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <b>{profileName}</b>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;