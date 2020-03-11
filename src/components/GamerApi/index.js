import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import API from "../../utils/API";

class GamerApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {},
      6: {}, 7: {}, 8: {}, 9: {}, 10: {}, 
      11: {}, 12: {}, 13: {}, 14: {}, 15: {},
      16: {}, 17: {}, 18: {}, 19: {}, 20: {},
      21: {}, 
    };
  };
  
  componentDidMount() {
    this.getTopTenRated();
  };
  
  getTopTenRated = () => {
    API.getGames().then(res => {
      const params = res.data.results;
      const topTwentyRatings = [
        params[0]["rating"], params[1]["rating"], params[2]["rating"], params[3]["rating"],
        params[4]["rating"], params[5]["rating"], params[6]["rating"], params[7]["rating"], 
        params[8]["rating"], params[9]["rating"], params[10]["rating"], params[11]["rating"], 
        params[12]["rating"], params[13]["rating"], params[14]["rating"], params[15]["rating"],
        params[16]["rating"], params[17]["rating"], params[18]["rating"], params[19]["rating"]
      ]
      
      topTwentyRatings.sort(function(a, b){
        return b - a;
      });
      
      for (let i = 0; i < params.length; i++) {
        const num = params[i]["rating"];
        if (num === topTwentyRatings[0]) {
          this.setState({ 1: params[i], 11: params[i]["genres"][0], 21: params[i]["clip"]["clip"] });
        } 
        if (num === topTwentyRatings[1]) {
          this.setState({ 2: params[i], 12: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[2]) {
          this.setState({ 3: params[i], 13: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[3]) {
          this.setState({ 4: params[i], 14: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[4]) {
          this.setState({ 5: params[i], 15: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[5]) {
          this.setState({ 6: params[i], 16: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[6]) {
          this.setState({ 7: params[i], 18: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[7]) {
          this.setState({ 8: params[i], 18: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[8]) {
          this.setState({ 9: params[i], 19: params[i]["genres"][0] });
        }
        if (num === topTwentyRatings[9]) {
          this.setState({ 10: params[i], 20: params[i]["genres"][0] });
        };
      };
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="center" direction="column">
          <Paper elevation={3}>

          </Paper>
        </Grid>
      </div>
    );
  };
};

export default GamerApi;