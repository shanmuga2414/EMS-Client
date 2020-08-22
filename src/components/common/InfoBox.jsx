import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ id, name, desc }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/work/${id}`}> {name} </Link>
        </h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default InfoBox;
