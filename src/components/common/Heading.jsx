import React from "react";

const Heading = (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Heading;
