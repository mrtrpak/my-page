import React, { Component } from "react";

import API from "../../utils/API";
import BundesligaStandings from "../BundesligaStandings";

class SoccerApiComp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}, 11: {}, 12: {},
      13: {}, 14: {}, 15: {}, 16: {}, 17: {}, 18: {}, 19: {}, 20: {}, 21: {}, 22: {}, 23: {}, 24: {},
      25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: {}, 36: {}
    };
  };

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
    this.getStandings(); 
  };

  getStandings = () => {
    API.getStandings().then(res => {
      const params = res.data.standings[0]["table"];
      this.setState({ 1: params[0], 2: params[1], 3: params[2], 4: params[3], 5: params[4], 6: params[5], 
        7: params[6], 8: params[7], 9: params[8], 10: params[9], 11: params[10], 12: params[11],
        13: params[12], 14: params[13], 15: params[14], 16: params[15], 17: params[16], 18: params[17], 
        19: params[0]["team"], 20: params[1]["team"], 21: params[2]["team"], 22: params[3]["team"], 23: params[4]["team"], 24: params[5]["team"], 
        25: params[6]["team"], 26: params[7]["team"], 27: params[8]["team"], 28: params[9]["team"], 29: params[10]["team"], 30: params[11]["team"], 
        31: params[12]["team"], 32: params[13]["team"], 33: params[14]["team"], 34: params[15]["team"], 35: params[16]["team"], 36: params[17]["team"]
      });
    }).catch(err => console.log(err));
  };

  render () {
    return (
      <div ref={this.myRef}>
        <BundesligaStandings getData={this.state} />
      </div>
    );
  };
};

export default SoccerApiComp;