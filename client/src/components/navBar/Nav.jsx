import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'; 
import logo1 from '../../img/logo1.png';

function NavBar() {
  return (
    <div className='container-fluid bg-white sticky-top'>
      <Navbar expand="md" className="py-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo1}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll style={{ maxHeight: '180px' }}>

              {/* Consistent Style for Nav Links */}
              <Nav.Link href="/" className="nav-link-custom mx-1">
                <i className="bi bi-house-door me-2"></i> Home
              </Nav.Link>

              {/* Programs Multilevel Dropdown */}
              <NavDropdown
                title={<><i className="bi bi-journal-bookmark me-2"></i> Programmes</>}
                className="nav-link-custom"
                id="programsDropdown"
              >
                <NavDropdown.Item href="researchers" className="dropdown-item-custom">
                  Our Reaserchers
                </NavDropdown.Item>
                <NavDropdown.Item href="courses" className="dropdown-item-custom">
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="projects" className="dropdown-item-custom">
                  Projects
                </NavDropdown.Item>

                {/* Submenu for More Courses */}
                <NavDropdown
                  title="Ongoing Projects"
                  drop="end"
                  className="submenu-dropdown"
                >
                  <NavDropdown.Item href="/courses/design" className="dropdown-item-custom">
                    Project 01
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/courses/marketing" className="dropdown-item-custom">
                    Project 02
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <Nav.Link href="/about" className="nav-link-custom mx-1">
                <i className="bi bi-info-circle me-2"></i> About
              </Nav.Link>

              <Nav.Link href="/blogs" className="nav-link-custom mx-1">
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
