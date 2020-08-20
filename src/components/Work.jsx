import React, { Component } from "react";
import { getPortfolios } from "../data/portfolio";
import InfoBox from "./common/InfoBox";

class Work extends Component {
  state = {
    portfolios: [],
  };

  componentDidMount() {
    this.setState({ portfolios: getPortfolios() });
  }
  render() {
    return this.state.portfolios.map((p) => {
      const str = p.desc;
      const desc = str.slice(0, 100);
      return (
        <div className="col-md-6 m10">
          <InfoBox key={p.id} id={p.id} name={p.name} desc={desc} />
        </div>
      );
    });
  }
}

export default Work;
