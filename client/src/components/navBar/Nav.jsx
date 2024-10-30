import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavBar() {
  return (
    <div className='container-fluid bgg-white sticky-top'>
      <Navbar expand="md" className="py-3">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
              style={{ maxHeight: '180px' }}
            >
              <Nav.Link href="/" className="nav-link-custom px-3">
                <i className="bi bi-house-door me-2"></i> Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom px-3">
                <i className="bi bi-info-circle me-2"></i> About
              </Nav.Link>
              <Nav.Link href="/courses" className="nav-link-custom px-3">
                <i className="bi bi-journal-bookmark me-2"></i> Programs
              </Nav.Link>
              <Nav.Link href="/blogs" className="nav-link-custom px-3">
                <i className="bi bi-chat-square-text me-2"></i> Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
