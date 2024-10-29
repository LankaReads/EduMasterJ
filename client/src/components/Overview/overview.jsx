import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview.css';
import { FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaUserGraduate } from 'react-icons/fa';

function Overview() {
    return (
        <div className="overview-container container-fluid py-5">
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaGraduationCap size={50} className="icon mb-3" />
                        <h3 className="stat-number">250,000+</h3>
                        <p className="stat-text">Graduates</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaChalkboardTeacher size={50} className="icon mb-3" />
                        <h3 className="stat-number">15,000+</h3>
                        <p className="stat-text">Expert Tutors</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaUniversity size={50} className="icon mb-3" />
                        <h3 className="stat-number">500+</h3>
                        <p className="stat-text">Partner Institutions</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="overview-card p-4 text-center">
                        <FaUserGraduate size={50} className="icon mb-3" />
                        <h3 className="stat-number">100+</h3>
                        <p className="stat-text">Certified Programs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
