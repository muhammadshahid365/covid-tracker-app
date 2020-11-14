import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dataStore from "./dataStore"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    margin: '0 auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    wordWrap: "breakWord",
    backgroundColor: "#34495e",
    color: "white"
  },
  title: {
    color: '#f1c40f',
  },
  values: {
    // color: '#c0392b'
  }
}));

export default function InfoPanel({data}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div>

      </div>
      <Grid container spacing={1}>
        {
          Object.keys(data).map(key => {
            return (
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper} elevation={3}>
                  <h2 className={classes.title}>{key}</h2>
                  <h4 className={classes.values}>{ data[key] }</h4>
                </Paper>
              </Grid>
            )
          })
        }

        {/* <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Panel 2</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Panel 3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
