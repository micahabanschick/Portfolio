import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

const NavBar = props => {
    return (
        <Navbar className="App-nav">
            <Navbar.Brand href="#home">Micah Banschick</Navbar.Brand>
           
            <Nav className="mr-auto">
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Resume</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}
  
export default NavBar;