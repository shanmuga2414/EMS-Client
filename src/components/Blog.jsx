import React from "react";
import portfolio from "../data/portfolio";
import InfoBox from "./common/InfoBox";
import { Redirect } from "react-router-dom";

const Blog = ({ user }) => {
  if (!user) return <Redirect to="/signin" />;

  return portfolio.map((p) => {
    return <InfoBox key={p.id} id={p.id} name={p.name} desc={p.desc} />;
  });
};

export default Blog;
