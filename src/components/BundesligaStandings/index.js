import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

import "./style.css";

export default function BundesligaStandings(props) {

  const createStandings = info => {
    let table = [];

    for (let i = 1; i < 19; i++) {
      let children = [];

      children.push(
        <TableRow id={"pos"+i} key={i}>
          <TableCell align="center">
            <span className="pointText">{i}</span>
          </TableCell>
          <TableCell align="center">
            <img src={info.accessState[i +18].crestUrl} alt="team logo" className="teamLogo" />
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i +18].name}</span>
          </TableCell>
          <TableCell align="center">
            <span className="pointText">{info.accessState[i].points}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].playedGames}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].won}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].draw}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].lost}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].goalsFor}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].goalsAgainst}</span>
          </TableCell>
          <TableCell align="center">
            <span className="text">{info.accessState[i].goalDifference}</span>
          </TableCell>
        </TableRow>
      );
      table.push(<TableBody key={i}>{children}</TableBody>); 
    };
    return table;
  };

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow className="tableHead">
              <TableCell align="center">
                <span className="headText">Pos</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">Logo</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">Team</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">TP</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">MP</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">Won</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">Draw</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">Lost</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">GF</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">GA</span>
              </TableCell>
              <TableCell align="center">
                <span className="headText">GD</span>
              </TableCell>
            </TableRow>
          </TableHead>
          {createStandings(props)}
        </Table>
      </TableContainer>
    </Paper>
  );
};