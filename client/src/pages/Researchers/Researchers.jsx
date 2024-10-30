// Researchers.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';

const researchersData = [
    {
        title: "Research Title 1",
        description: "Brief description of the research conducted.",
        imageUrl: "https://via.placeholder.com/350",
    },
    {
        title: "Research Title 2",
        description: "Brief description of the research conducted.",
        imageUrl: "https://via.placeholder.com/350",
    },
    {
        title: "Research Title 3",
        description: "Brief description of the research conducted.",
        imageUrl: "https://via.placeholder.com/350",
    },
];

const Researchers = () => {
    return (
        <>
        <NavBar/>
        <ProgramNav/>
        <div>
            <header className="bg-primary text-white text-center py-4">
                <h1>Client Research</h1>
                <p>Explore Our Comprehensive Research Projects</p>
            </header>

            <div className="container mt-4">
                <div className="row">
                    {researchersData.map((research, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow">
                                <img src={research.imageUrl} className="card-img-top" alt={research.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{research.title}</h5>
                                    <p className="card-text">{research.description}</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
        <Footer/>
        </>
    );
};

export default Researchers;
