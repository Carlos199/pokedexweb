import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "white",
  },
}));

const AppNavigator = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position='fixed'>
      <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography variant='h6' className={classes.title}>
            Pokedex
          </Typography>
        </Link>
        <Link to='/favourites' className={classes.link}>
          <Typography
            variant='h6'
            className={classes.title}
            style={{ marginLeft: 15 }}>
            Favoritos
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavigator;
