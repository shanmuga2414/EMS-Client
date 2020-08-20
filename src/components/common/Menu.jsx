import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ user }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarTogglerDemo01"
    //     aria-controls="navbarTogglerDemo01"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //     <a className="navbar-brand" href="#">
    //       Nirmal.info
    //     </a>
    //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li className="nav-item active">
    //         <Link className="nav-link" to="/home">
    //           Home <span className="sr-only">(current)</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/blog">
    //           Blog
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/contact">
    //           Contact
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/signin">
    //           Signin
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/signup">
    //           Signup
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Nirmal.info</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        {user && (
          <Link className="p-2 text-dark" to="/home">
            Home <span className="sr-only">(current)</span>
          </Link>
        )}
      </nav>
      {!user && (
        <React.Fragment>
          <Link className="p-2 btn btn-outline-primary" to="/signin">
            Sign In
          </Link>
          <Link className="p-2 ml-2 btn btn-outline-primary" to="/signup">
            Sign up
          </Link>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <Link className="p-2 btn btn-outline-info" to="/profile">
            {user.name}
          </Link>
          <Link className="p-2 ml-2 btn btn-outline-danger" to="/logout">
            Logout
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
