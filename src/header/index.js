import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

export default class HeaderView extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">KS</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            About
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}