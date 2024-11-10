import React, { useState } from 'react';
import CourseSection from '../../components/CourseSection/CourseSection';
import './Courses.css';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';

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
      {/* <ProgramNav /> */}
      <div className="container-fluid d-flex justify-content-center align-items-center py-4">
        <div className="course-section d-flex justfy-items-center text-center">
          <div className="course-header text-center mb-4">
            {/* <h2 className="text-blue">My Enrolled Courses</h2> */}
          </div>

          {/* Pass the enrolledCourses and removeCourse function to CourseSection */}
          <CourseSection 
            enrolledCourses={enrolledCourses} 
            removeCourse={removeCourse} 
          className="d-flex justify-content-center align-items-center" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
