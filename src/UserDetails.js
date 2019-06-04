import React, { Component, Fragment } from 'react';
import UserEditForm from './UserEditForm';

class UserDetails extends Component {

	constructor (props) {

    	super(props);

	    this.state = {

	     	userDetails: {
		        firstName: "John",
				lastName: "Smith"
		    },

	    	editModeEnabled: false

    	}

	    this.enableEditMode = this.enableEditMode.bind(this);
	    this.disableEditMode = this.disableEditMode.bind(this);
	    
	    this.saveUserDetails = this.saveUserDetails.bind(this);
  	}


	enableEditMode () {
	  this.setState({ editModeEnabled: true });
	}

	disableEditMode () {
	  this.setState({ editModeEnabled: false });
	}

	saveUserDetails (details) {

	  this.setState({
	    userDetails: details,
	    editModeEnabled: false
	  });

	}

	render () {

	  return (

	    <div className = "user-details-inner">
	    
	    { (!this.state.editModeEnabled) &&
	     (
	      <div className = "user-details-name">

	        <div>{ this.state.userDetails.firstName }</div>
	        <div>{ this.state.userDetails.lastName }</div>


	        <div className = "controls-wrapper">
	        	<button onClick = { this.enableEditMode }> Edit </button>
			</div>

	      </div>
	      ) 
	    }

	    { (this.state.editModeEnabled) && (

	      <Fragment>

	        <UserEditForm 
	          disableEditMode = { this.disableEditMode }
	          saveUserDetails = { this.saveUserDetails }
	          userDetails = { this.state.userDetails } 
	        />

	      </Fragment>

	    ) }

	    
	    </div>

	  );

	}

}

export default UserDetails;