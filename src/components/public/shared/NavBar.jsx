import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const NavBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" elevation="0">
      <Toolbar>
        <Typography variant="title" color="inherit">
          ExpressJS + React Template
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

NavBar.defaultProps = {
  classes: {},
};

export default withStyles(styles)(NavBar);
