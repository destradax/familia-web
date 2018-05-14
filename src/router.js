import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Home from './routes/home';

export default class Router extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}
