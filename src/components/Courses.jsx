import React, { useState } from 'react'; // Import the CSS file
import './cour.css'
import CourseElemnt from './coursec/Ele'

const universityCourses = [
  { name: 'Introduction to Computer Science', professor: 'Dr. Jane Smith' },
  { name: 'Data Structures and Algorithms', professor: 'Dr. Michael Johnson' },
  { name: 'Operating Systems', professor: 'Dr. Emily Davis' },
  { name: 'Artificial Intelligence', professor: 'Dr. David Wilson' },
  { name: 'Computer Networks', professor: 'Dr. Sarah Thompson' },
];

const paidCourses = [
  { name: 'Web Development Bootcamp', professor: 'John Doe', college: 'Tech University', rating: 4.5 },
  { name: 'Machine Learning Masterclass', professor: 'Maria Rodriguez', college: 'Data Science Institute', rating: 4.8 },
  { name: 'Cyber Security Fundamentals', professor: 'Tom Wilson', college: 'Cyber Academy', rating: 4.2 },
  { name: 'Data Visualization with D3.js', professor: 'Emily Johnson', college: 'Design College', rating: 4.6 },
  { name: 'React Native Mobile Development', professor: 'Michael Brown', college: 'Tech University', rating: 4.4 },
  // { name: 'iOS App Development', professor: 'Jessica Taylor', college: 'Mobile Academy', rating: 4.7 },
  // { name: 'Python for Data Science', professor: 'Alex Parker', college: 'Data Science Institute', rating: 4.9 },
  // { name: 'Blockchain Fundamentals', professor: 'Chris Adams', college: 'Tech Academy', rating: 4.3 },
  // { name: 'UI/UX Design Principles', professor: 'Sophia Anderson', college: 'Design College', rating: 4.6 },
  // { name: 'Digital Marketing Strategies', professor: 'Daniel White', college: 'Marketing School', rating: 4.5 },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>); // Full star unicode
  }

  if (halfStar) {
    stars.push(<span key="half">&#9734;</span>); // Half star unicode
  }

  return stars;
};

const Courses = () => {
  const [ele,setele]=useState(false);
  function setElement(){
    setele((e)=>!e);
  }
  let st= <div className='mt-20 bg-black'>
  <div className='courbody'>
  <div className="container">
    <h2 className='text-2xl'>University Courses</h2>
    <div className="course-container mb-10">
      {universityCourses.map((course, index) => (
        <a href={`#university-course-${index}`} key={index} className="course-card" onClick={setElement}>
          <h3>{course.name}</h3>
          <p>Professor: {course.professor}</p>
        </a>
      ))}
    </div>

    <h2 className='text-2xl'>Subject-Wise Paid Courses</h2>
    <div className="course-container">
      {paidCourses.map((course, index) => (
        <a href={`#paid-course-${index}`} key={index} className="course-card">
          <h3>{course.name}</h3>
          <p>Professor: {course.professor}</p>
          <p>College: {course.college}</p>
          <p>Rating: {renderStars(course.rating)}</p>
        </a>
      ))}
    </div>
  </div>
  </div></div>;
  if(ele){
    st=<div className='mt-20'><CourseElemnt/></div>
  }

  return (
    <div className='bg-black'>
   {st}</div>
  );
};

export default Courses;
