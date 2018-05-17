import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={false}
        onRequestChange={this.props.onRequestChange}
      >
        <Link to="/"><MenuItem>Home</MenuItem></Link>
      </Drawer>
    );
  }
}
