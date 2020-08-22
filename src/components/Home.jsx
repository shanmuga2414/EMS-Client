import React, { Component } from "react";
// import Heading from "./common/Heading";
import Profile from "./common/Profile";
import Work from "./Work";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Heading title="Welcome" desc="Welcome to nirmal.info" /> */}
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <Profile />
            </div>
            <div className="col-md-8">
              <div className="row">
                <Work />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
