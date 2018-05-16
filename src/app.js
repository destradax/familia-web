import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSideBarOpen: false};
  }

  openSideBar() {
    this.setState({isSideBarOpen: true});
  }

  closeSideBar() {
    this.setState({isSideBarOpen: false});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Familia Gómez" onLeftIconButtonClick={() => this.openSideBar()} />
          <Drawer
            open={this.state.isSideBarOpen}
            docked={false}
            onRequestChange={() => this.closeSideBar()}
          >
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <Router />
        </div>
      </MuiThemeProvider>
    );
  }
}

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}
