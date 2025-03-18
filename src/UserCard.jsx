import React from 'react';
import './UserCard.css'; // Importing a separate CSS file for styling

const UserCard = () => {
  // Static dummy data for the user
  const profilePhoto = ""; // Static profile photo URL
  const name = "";
  const email = "goldi@example.com";
  const phone = "+1 234 567 890";
  const address = "1234 Elm Street, Springfield, IL, 62701, USA";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="user-card__photo" />
      <div className="user-card__details">
        <h2 className="user-card__name">{name}</h2>
        <p className="user-card__email">Email: {email}</p>
        <p className="user-card__phone">Phone: {phone}</p>
        <p className="user-card__address">Address: {address}</p>
      </div>
    </div>
  );
};

export default UserCard;
