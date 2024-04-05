import React from 'react';
import './proo.css'; // Import CSS file for styling

export default function ProfilePage(){
  const user = {
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'john.doe@example.com',
    username: 'John Doe',
    group: 'LEO',
    department: 'Computer Science',
    university: 'Tech University',
    points: 1200,
  };

  return (
    <div className="profile-container flex justify-center items-center ">
      <div className="profile-picture">
        <img src={user.picture} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p className={user.group === 'LEO' ? 'group-red' : ''}>Group: {user.group}</p>
        <p>Department: {user.department}</p>
        <p>University: {user.university}</p>
        <p>Points: {user.points}</p>
      </div>
    </div>
  );
};