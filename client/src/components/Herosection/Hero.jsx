import React, { useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom"; // For navigation in react-router-dom v6

// Replace the local image with an online image URL
const eduImage = "https://www.neoito.com/blog/wp-content/uploads/2023/03/AI-in-Healthcare-Revolutionizing-the-Way-to-Treat-Patients.png"
const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleStudentClick = () => {
    navigate('/register'); // Navigate to the register page for students
  };

  const handleTeacherClick = () => {
    setShowModal(true); // Show modal for teacher confirmation
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="hero-container container-fluid">
      <div className="row align-items-center hero-content">
        {/* Left Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center hero-text">
          <p className="welcome">AI In Medicine <br /> </p>
          <br />
          
         
          <p className="description">
            Artificial Intelligence (AI) is transforming healthcare by providing tools that enable precise diagnoses, personalized treatments, and proactive health management. 
            From predictive analysis in disease prevention to assisting medical professionals in making more informed decisions, AI is reshaping the future of medicine.
          </p>
          {/* <div className="hero-buttons-container">
            <button className="student-btn btn" onClick={handleStudentClick}>
              Be a Student
            </button>
            <button className="teacher-btn btn" onClick={handleTeacherClick}>
              Be a Teacher
            </button>
          </div> */}
        </div>
        {/* Right Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center hero-image-container">
          <img src={eduImage} alt="Educational Platform" className="hero-image img-fluid" />
        </div>
      </div>

      {showModal && (
        <div className="teacher-modal">
          <div className="modal-content">
            <p>Do you want to become a teacher?</p>
            <button className="btn btn-success" onClick={handleModalConfirm}>
              Yes
            </button>
            <button className="btn btn-danger" onClick={() => setShowModal(false)}>
              No
            </button>
            <br />
          </div>
        </div>
      )}
</div>




    
  );
};

export default Hero;
