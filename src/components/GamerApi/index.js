import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import API from "../../utils/API";
import TopTenGames from "../TopTenGames";

class GamerApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {},
      6: {}, 7: {}, 8: {}, 9: {}, 10: {}, 
      11: {}, 12: {}, 13: {}, 14: {}, 15: {},
      16: {}, 17: {}, 18: {}, 19: {}, 20: {},
      21: {}, 22: {}, 23: {}, 24: {}, 25: {},
      26: {}, 27: {}, 28: {}, 29: {}, 30: {}
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
        const info = params[i];
        const genre = params[i]["genres"][0];
        const clip = params[i]["clip"]["clip"];

        if (num === topTwentyRatings[0]) {
          this.setState({ 
            1: info, 11: genre, 21: clip 
          });
        } 
        if (num === topTwentyRatings[1]) {
          this.setState({ 
            2: info, 12: genre, 22: clip 
          });
        }
        if (num === topTwentyRatings[2]) {
          this.setState({ 
            3: info, 13: genre, 23: clip 
          });
        }
        if (num === topTwentyRatings[3]) {
          this.setState({ 
            4: info, 14: genre, 24: clip 
          });
        }
        if (num === topTwentyRatings[4]) {
          this.setState({ 
            5: info, 15: genre, 25: clip 
          });
        }
        if (num === topTwentyRatings[5]) {
          this.setState({ 
            6: info, 16: genre, 26: clip 
          });
        }
        if (num === topTwentyRatings[6]) {
          this.setState({ 
            7: info, 17: genre, 27: clip 
          });
        }
        if (num === topTwentyRatings[7]) {
          this.setState({ 
            8: info, 18: genre, 28: clip 
          });
        }
        if (num === topTwentyRatings[8]) {
          this.setState({ 
            9: info, 19: genre, 29: clip 
          });
        }
        if (num === topTwentyRatings[9]) {
          this.setState({ 
            10: info, 20: genre, 30: clip 
          });
        };
      };
    }).catch(err => console.log(err));
  };

  render() {

    return (
      <Grid container justify="center" alignItems="center" direction="column">
        <Paper elevation={3}>
          <TopTenGames getData={this.state} />
        </Paper>
      </Grid>
    );
  };
};

export default GamerApi;