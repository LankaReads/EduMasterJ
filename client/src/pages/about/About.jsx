import React from 'react';
import './About.css';
import Footer from '../../components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollTop from '../../components/Scroll-top/ScrollTop';
import NavBar from '../../components/navBar/Nav';

function About() {
  return (
    <>
      <NavBar />

      <div className="about-container py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container p-4 shadow-sm" style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          {/* Mission and Story Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://socialspike.in/wp-content/uploads/2023/07/About-Us-1.jpg"
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-3">Our Mission</h2>
              <p className="text-justify">
                At Education Inc., our mission is to build a vibrant community where learners, educators, and mentors connect to share knowledge and inspire one another. We aim to make learning accessible, engaging, and transformative for everyone.
              </p>
              <h2 className="mb-3">Our Story</h2>
              <p className="text-justify">
                Established in 2024, Education Inc. started as a small group of educators committed to improving access to quality education. Over time, we’ve expanded to provide a global platform for learners and teachers to share their passion for learning and professional development.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="row text-center mb-5 ">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3 ">
                <i className="bi bi-people-fill text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                <h4 className="mb-3">Community</h4>
                <p>
                  Our platform fosters a collaborative learning environment, bringing students and educators together from around the world to exchange ideas and grow together.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <i className="bi bi-book-fill text-success mb-3" style={{ fontSize: '3rem' }}></i>
                <h4 className="mb-3">Extensive Resources</h4>
                <p>
                  We offer a wide variety of educational resources, from e-books to video courses, ensuring students have the tools they need to succeed.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <i className="bi bi-lightbulb-fill text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                <h4 className="mb-3">Innovation</h4>
                <p>
                  We inspire learners through innovative teaching methods and cutting-edge technologies, fostering a culture of creativity and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollTop />
      <Footer />
    </>
  );
}

export default About;
