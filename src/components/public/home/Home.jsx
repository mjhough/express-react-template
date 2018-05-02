import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <React.Fragment>
    <h1>Test!</h1>
    <Link to="/about">go to about page</Link>
  </React.Fragment>
);

export default Home;
