import React from "react";
const ProfileCards = ({ title, discription,logo }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{discription}</p>
      </div>
      <figure>
        <img
          src={`https://res.cloudinary.com/dxlzl3dej/${logo}`}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default ProfileCards;
