import React from 'react';
import PropTypes from 'prop-types';
// import { AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <p>Not yet implemented. Here so eslint doesnt&apos; get angry at me</p>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Footer.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Footer);
