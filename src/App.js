import React, { Component, Fragment } from 'react';

import Folder from './Folder';
import UserDetails from './UserDetails';

class App extends Component {

  render () {

    return (

      <Fragment>

        <div className = "folder-wrapper">
          <Folder />
        </div>
      
        <div className = "user-details">
          <UserDetails />
        </div>

      
      </Fragment>

    );

  }

}


export default App;
