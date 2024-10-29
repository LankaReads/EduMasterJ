// Projects.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer/footer';
import NavBar from '@/components/navBar/Nav';

const projectsData = [
    {
        title: "Project Title 1",
        description: "Brief description of the ongoing project.",
        imageUrl: "https://via.placeholder.com/350",
    },
    {
        title: "Project Title 2",
        description: "Brief description of the ongoing project.",
        imageUrl: "https://via.placeholder.com/350",
    },
    {
        title: "Project Title 3",
        description: "Brief description of the ongoing project.",
        imageUrl: "https://via.placeholder.com/350",
    },
];

const Projects = () => {
    return (
        <>
        <NavBar/>
        <div>
            <header className="bg-success text-white text-center py-4">
                <h1>Ongoing Projects</h1>
                <p>Discover Our Current Initiatives</p>
            </header>

            <div className="container mt-4">
                <div className="row">
                    {projectsData.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow">
                                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href="#" className="btn btn-success">View Progress</a>
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

export default Projects;
