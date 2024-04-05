import React from 'react';
import './ele.css'; // Import the CSS file

const VideoSection = () => {
  const videos = [
    { title: 'Lecture 1 - Introduction to React', url: 'https://www.youtube.com/embed/video1' },
    { title: 'Lecture 2 - React Components', url: 'https://www.youtube.com/embed/video2' },
    { title: 'Lecture 3 - State and Props', url: 'https://www.youtube.com/embed/video3' },
  ];

  return (
    <div className="section">
      <h2>Videos</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <h3>{video.title}</h3>
            <iframe
              title={video.title}
              width="100%"
              height="315"
              src={video.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const AssignmentCard = ({ title, deadline, showHelpButton }) => {
  return (
    <div className="assignment-card">
      <h3 className='mt-10'>{title}</h3>
      <p>Deadline: {deadline}</p>
      {showHelpButton && (
        <button className="help-button">Ask for Help</button>
      )}
    </div>
  );
};

const AssignmentSection = () => {
  const assignments = [
    { title: 'Assignment 1', deadline: 'April 15, 2024', showHelpButton: true },
    { title: 'Assignment 2', deadline: 'April 22, 2024', showHelpButton: false },
    { title: 'Assignment 3', deadline: 'April 29, 2024', showHelpButton: true },
  ];

  return (
    <div className="section">
      <h2>Assignments</h2>
      <div className="assignment-list">
        {assignments.map((assignment, index) => (
          <AssignmentCard
            key={index}
            title={assignment.title}
            deadline={assignment.deadline}
            showHelpButton={assignment.showHelpButton}
          />
        ))}
      </div>
    </div>
  );
};

const MaterialSection = () => {
  const materials = [
    { name: 'Material 1', url: 'https://example.com/material1.pdf' },
    { name: 'Material 2', url: 'https://example.com/material2.pdf' },
    { name: 'Material 3', url: 'https://example.com/material3.pdf' },
  ];

  return (
    <div className="section">
      <h2>Materials</h2>
      <div className="material-list">
        {materials.map((material, index) => (
          <div key={index} className="material-item">
            <a href={material.url} target="_blank" rel="noopener noreferrer">
              {material.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseElement = () => {
  return (
    <div className="container">
      <VideoSection />
      <AssignmentSection />
      <MaterialSection />
    </div>
  );
};

export default CourseElement;
