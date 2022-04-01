import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Context is being brought in here because it contains the state variables
// required to conditionally show login/logout in the navbar
// based on whether the login has actually occurred or not

import { UserContext } from './user-context';

function NavigationBar() {
    // Setting the context as ctx
    const ctx = React.useContext(UserContext);
    // Grabbing the state variable from context
    const [loggedIn, setLoggedIn] = ctx.loginState;
    return (
        <Navbar className="color-nav" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Bad Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link title="Home Page">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/createaccount">
                            <Nav.Link title="Create a New Account">Create Account</Nav.Link>
                        </LinkContainer>
{/* Conditionally rendering the login option if loggedIn is false */}
                        {!loggedIn && <LinkContainer to="login">
                            <Nav.Link title="Log In">Login</Nav.Link>
                        </LinkContainer>}
                        <LinkContainer to="deposit">
                            <Nav.Link title="Deposit Funds">Deposit</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="withdraw">
                            <Nav.Link title="Withdraw Funds">Withdraw</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="transaction-history">
                            <Nav.Link title="View your Transaction History">Transaction History</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="alldata">
                            <Nav.Link title="See all User Data">All Data</Nav.Link>
                        </LinkContainer>
{/* Conditionally rendering the logout option if loggedIn is true */}
                        {loggedIn && <LinkContainer to="login">
                            <Nav.Link title="Log Out">Logout</Nav.Link>
                        </LinkContainer>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default NavigationBar;