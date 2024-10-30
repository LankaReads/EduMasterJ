import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import logo1 from "../../img/logo1.png";
import './Nav.css';

function NavBar() {
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [teacherID, setTeacherID] = useState('');
  const [teacherPassword, setTeacherPassword] = useState('');
  const [adminID, setAdminID] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [adminErrorMessage, setAdminErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleTeacherPortalClick = () => {
    setShowTeacherModal(true);
  };

  const handleCloseTeacherModal = () => {
    setShowTeacherModal(false);
    setTeacherID('');
    setTeacherPassword('');
    setErrorMessage('');
  };

  const handleLoginTeacher = () => {
    if (teacherID === '001' && teacherPassword === 'teacher123') {
      setShowTeacherModal(false);
      navigate('/teacherdashboard');
    } else {
      setErrorMessage('Invalid ID or Password');
    }
  };

  const handleAdminPanelClick = () => {
    setShowAdminModal(true);
  };

  const handleCloseAdminModal = () => {
    setShowAdminModal(false);
    setAdminID('');
    setAdminPassword('');
    setAdminErrorMessage('');
  };

  const handleLoginAdmin = () => {
    if (adminID === 'admin001' && adminPassword === 'admin123') {
      setShowAdminModal(false);
      navigate('/admindashboard');
    } else {
      setAdminErrorMessage('Invalid ID or Password');
    }
  };

  return (
    <>
      <div className='container-fluid bg-body-secondary'>
        <Navbar expand="md" className="py-3">
          <Container fluid>
            <Navbar.Brand href="/"><img src={logo1} alt="" className='logo1' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
                style={{ maxHeight: '180px' }}
              >
                <Nav.Link href="/" className="px-3 text-primary">Home</Nav.Link>
                <Nav.Link href="/about" className="px-3 text-primary">About</Nav.Link>
                <Nav.Link href="/courses" className="px-3 text-primary">Programs</Nav.Link>
                <Nav.Link href="/blogs" className="px-3 text-primary">Blogs</Nav.Link>
              </Nav>
              <Form className="d-flex flex-row align-items-center me-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ padding: '8px 12px' }}
                />
                <Button variant="outline-info" className="me-3">Search</Button>

                <Dropdown drop='down' align="end">
                  <Dropdown.Toggle variant="outline-info" id="dropdown-basic" className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/studentPortal">Student Portal</Dropdown.Item>
                    <Dropdown.Item onClick={handleTeacherPortalClick}>Teacher Portal</Dropdown.Item>
                    <Dropdown.Item onClick={handleAdminPanelClick}>Admin Panel</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Teacher Portal Modal */}
      <Modal show={showTeacherModal} onHide={handleCloseTeacherModal}>
        <Modal.Header closeButton>
          <Modal.Title>Teacher Portal Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="teacherID">
              <Form.Label>Teacher ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your ID"
                value={teacherID}
                onChange={(e) => setTeacherID(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="teacherPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={teacherPassword}
                onChange={(e) => setTeacherPassword(e.target.value)}
              />
            </Form.Group>

            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTeacherModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginTeacher}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Admin Panel Modal */}
      <Modal show={showAdminModal} onHide={handleCloseAdminModal}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Panel Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="adminID">
              <Form.Label>Admin ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Admin ID"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="adminPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </Form.Group>

            {adminErrorMessage && <p className="text-danger mt-2">{adminErrorMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdminModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginAdmin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
