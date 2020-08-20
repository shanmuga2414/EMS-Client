import React, { Component } from "react";
import { getPortfolio } from "../data/portfolio";
import InfoBox from "./common/InfoBox";

class WorkSingle extends Component {
  state = {
    portfolio: [],
  };

  componentDidMount() {
    this.setState({ portfolio: getPortfolio(this.props.match.params.id) });
  }
  render() {
    console.log(this.state.portfolio);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-9">
            <div className="card mb-4 shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <h5 className="card-title">{this.state.portfolio.name}</h5>
                <p className="card-text">{this.state.portfolio.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Download File</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkSingle;
