import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ id, name }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <Link to={`/pdf`}> {name} </Link>
      </div>
    </div>
  );
};

export default InfoBox;
