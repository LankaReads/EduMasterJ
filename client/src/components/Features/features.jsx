import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';
import { FaChalkboardTeacher, FaLaptopCode, FaGraduationCap, FaBookOpen } from 'react-icons/fa';

function Features() {
    return (
        <div className="container-fluid feature-background py-5">
            <div className='row text-center'>
                <h2 className="feature-title mb-5">Our Key Features</h2>
            </div>
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaChalkboardTeacher size={50} className="feature-icon mb-3" />
                        <h4>Expert Tutors</h4>
                        <p>Learn from top educators around the world. Our platform connects you with experts in every subject, ensuring a comprehensive learning experience.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaLaptopCode size={50} className="feature-icon mb-3" />
                        <h4>Interactive Classes</h4>
                        <p>Engage in live interactive sessions and practical workshops. Participate in discussions, solve problems, and collaborate with peers in real-time.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaGraduationCap size={50} className="feature-icon mb-3" />
                        <h4>Certified Courses</h4>
                        <p>All courses are certified by top institutions. Upon completion, receive recognized certifications that add value to your academic and career profiles.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="feature-card p-4 text-center">
                        <FaBookOpen size={50} className="feature-icon mb-3" />
                        <h4>Comprehensive Resources</h4>
                        <p>Access a vast library of educational resources, from textbooks to research papers. We provide all the materials you need to excel in your studies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
