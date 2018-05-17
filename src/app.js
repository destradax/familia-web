import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './routes/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSideBarOpen: false};
  }

  setSideBarOpen(isSideBarOpen) {
    this.setState({isSideBarOpen});
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div id="app-container">
            <AppBar title="Familia Gómez" onLeftIconButtonClick={() => this.setSideBarOpen(true)} />
            <Sidebar
              open={this.state.isSideBarOpen}
              onRequestChange={(open) => this.setSideBarOpen(open)}
            />

            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
