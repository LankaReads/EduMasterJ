import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subscription.css';

function EducationInfo() {
    const educationImg1 = 'https://static.vecteezy.com/system/resources/thumbnails/007/126/175/small/glowing-lightbulb-with-virtual-brain-on-open-book-and-connection-line-for-reading-and-education-make-smart-or-creative-thinking-idea-concept-photo.jpg';
    const educationImg2 = 'https://theglobalscholars.com/wp-content/uploads/2020/12/34512613_xl-1-scaled.jpg';

    return (
        <div className="education-section">
            <div className="container py-3"> {/* Reduced padding */}
                <div className="row text-center mb-4">
                    <div className="col">
                        <h2 className="section-title">Why Choose Us for Your Education Journey?</h2>
                        <p className="section-subtitle">Empowering students and educators with top-notch resources</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card education-card">
                            <img src={educationImg1} className="card-img-top" alt="Education Resource 1" />
                            <div className="card-body">
                                <h5 className="card-title">Innovative Learning Tools</h5>
                                <p className="card-text">
                                    Our platform provides cutting-edge tools designed to enhance learning experiences. From interactive courses to adaptive assessments, we make sure you’re equipped to succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card education-card">
                            <img src={educationImg2} className="card-img-top" alt="Education Resource 2" />
                            <div className="card-body">
                                <h5 className="card-title">Expert Guidance & Support</h5>
                                <p className="card-text">
                                    We collaborate with industry experts and educators to provide you with high-quality guidance and resources, ensuring you stay ahead in your educational journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationInfo;
