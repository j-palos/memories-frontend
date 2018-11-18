import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

            <Navbar color="light" light expand="md">
                    <NavbarBrand>Us</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/dates" activeClassName="active" tag={RRNavLink}>Dates Ideas</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/memories" activeClassName="active" tag={RRNavLink}>Memories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/create" activeClassName="active" tag={RRNavLink}>Add New Idea</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}