import { Navbar,Nav,Container } from 'react-bootstrap'
import {
  Link
} from "react-router-dom";
const Navb = () => {
    return (  
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">EzyWS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
          <Nav.Link> <Link to="/s3">s3</Link> </Nav.Link>
          <Nav.Link> <Link to="/ec2">Ec2</Link> </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
    );
}
 
export default Navb;


