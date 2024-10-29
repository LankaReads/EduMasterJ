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
          
          <h2> Professional researcher : AI In Medicine</h2>
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
{/* Info Cards Section */}
<div className="row text-center my-5">
  <div className="col-md-4">
    <div className="card shadow-lg mb-4" style={{ backgroundColor: "rgba(0, 123, 255, 0.1)", border: "none" }}>
      <img src="https://www.bioindustry.org/static/8e8bc477-5f0e-4013-8fa22f653983b133/resourcerowlistingimagedefault_4d12532919c64e60a22baf03232bbf94_4a7c7e45a350/AdobeStock618786636-momentum-texture-1500-1024x683.png" 
           className="card-img-top" 
           alt="Innovative Diagnostics" 
           style={{ opacity: 0.85, height: "250px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "bold", color: "#007bff" }}>Innovative Diagnostics</h5>
        <p className="card-text" style={{ color: "#333" }}>
          Explore AI's role in developing precise diagnostic tools that assist doctors in detecting diseases earlier and more accurately.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow-lg mb-4" style={{ backgroundColor: "rgba(108, 117, 125, 0.1)", border: "none" }}>
      <img src="https://arielmedicine.com/wp-content/uploads/2021/01/icon-risk-factors2-sm-768x658.png" 
           className="card-img-top" 
           alt="Personalized Medicine" 
           style={{ opacity: 0.85, height: "250px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "bold", color: "#6c757d" }}>Personalized Medicine</h5>
        <p className="card-text" style={{ color: "#333" }}>
          AI provides insights for tailored treatments based on individual genetic profiles, lifestyle, and specific health data.
        </p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow-lg mb-4" style={{ backgroundColor: "rgba(40, 167, 69, 0.1)", border: "none" }}>
      <img src="https://img.freepik.com/free-vector/online-doctor-concept_23-2148514649.jpg" 
           className="card-img-top" 
           alt="Patient Care Optimization" 
           style={{ opacity: 0.85, height: "350px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "bold", color: "#28a745" }}>Patient Care Optimization</h5>
        <p className="card-text" style={{ color: "#333" }}>
          AI helps healthcare providers manage patient data, track health progress, and improve overall patient care quality.
        </p>
      </div>
    </div>
  </div>
</div></div>




    
  );
};

export default Hero;
