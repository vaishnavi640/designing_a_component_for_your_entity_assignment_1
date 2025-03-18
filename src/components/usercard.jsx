// write the component code here

import React from 'react';
import '../App.css'; // Importing a separate CSS file for styling

const UserCard = () => {
  // Static dummy data for the user
  const profilePhoto = "https://kalvium.com/wp-content/uploads/2023/05/Kalvium-OG.webp"; // Static profile photo URL
  const name = "vaishnavi";
  const email = "kalvium.student@example.com";
  const phone = "7412589630";
  const address = "hyderabad";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-card__photo" />
      <div className="user-card__details">
        <h2 className="user-card__name">name: {name}</h2>
        <p className="user-card__email">Email: {email}</p>
        <p className="user-card__phone">Phone: {phone}</p>
        <p className="user-card__address">Address: {address}</p>
      </div>
    </div>
  );
};

export default UserCard;

