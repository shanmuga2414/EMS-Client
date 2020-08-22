import React, { Component } from "react";

class Profile extends Component {
  state = {
    imageUrl: "../../nirmal.jpg",
  };
  render() {
    return (
      <div className="card">
        <img src={this.state.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nirmalkumar</h5>
          <p className="card-text">I am a Full Stack Developer</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ph: 9597786919</li>
          <li className="list-group-item">E: snirmal2589@gmail.com</li>
          <li className="list-group-item">In: nirmal.info</li>
        </ul>
        <div className="card-body">
          {/* <a href="#" className="card-link">
            Card li nk
          </a>
          <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    );
  }
}

export default Profile;
