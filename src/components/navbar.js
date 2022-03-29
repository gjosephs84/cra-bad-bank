import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


function NavigationBar() {
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
                        <LinkContainer to="login">
                            <Nav.Link title="Log In or Out">Login</Nav.Link>
                        </LinkContainer>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default NavigationBar;