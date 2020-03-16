import axios from "axios";

const SoccerURL = "https://api.football-data.org/v2/competitions/BL1/standings";
const GameURL = "https://api.rawg.io/api/games?dates=2015-01-01,2020-12-12&ordering=-added";

export default {
  
  getStandings: () => {
    return axios.request({
      url: SoccerURL,
      method: "get",
      headers: { "X-Auth-Token": "5d08ba09e1d84003adc242dbd50ca5bb" }
    });
  },
  getGames: () => {
    return axios.request({
      url: GameURL,
      method: "get"
    });
  }
};