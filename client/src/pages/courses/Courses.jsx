import React, { useState } from 'react';
import CourseSection from '../../components/CourseSection/CourseSection';
import './Courses.css';
import Footer from '../../components/Footer/footer';
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar';
import NavBar from '../../components/navBar/Nav';

function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState([
    // Example of pre-enrolled courses (if any); otherwise, start with an empty array.
    {
      id: 1,
      title: 'Maths',
      teacher: 'Mr. John Doe',
      description: 'Learn basic to advanced mathematics.',
      image: 'https://via.placeholder.com/100x100',
      progress: 50,
    },
  ]);

  // Function to remove a course from enrolled courses
  const removeCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter((course) => course.id !== courseId));
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar: Navigation Menu */}
          <StudentNavBar />

          {/* Right Content: Student Info and Courses */}
          <div className="col-lg-9 col-md-8 col-sm-12 right-content">
            <div className="course-header text-center mb-4">
              <h2 className="course-title">Your Courses</h2>
              <p className="course-subtitle">Track your progress and manage your enrolled courses</p>
            </div>

            {/* Pass the enrolledCourses and removeCourse function to CourseSection */}
            <CourseSection 
              enrolledCourses={enrolledCourses} 
              removeCourse={removeCourse} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
