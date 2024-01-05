import React from "react";
import "./Card.css";

interface CardProps {
  backgroundImage: string;
  name: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="CardLink"
    >
      <div className="CardContent">
        <h2>{name}</h2>
      </div>
      <div className="Card">
        <div
          className="CardImage"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
    </a>
  );
};

export default Card;
