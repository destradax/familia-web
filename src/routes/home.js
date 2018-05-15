import AppBar from 'material-ui/AppBar';
import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <AppBar
          title="Familia Gómez"
        />
      </div>
    );
  }
}
