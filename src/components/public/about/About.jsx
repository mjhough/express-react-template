import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const About = props => (
  <div>
    <h1>{props.about}</h1>
    <Link to="/">Go to home page</Link>
  </div>
);

About.propTypes = {
  about: PropTypes.string,
};

About.defaultProps = {
  about: 'This is the about page!',
};

export default About;
