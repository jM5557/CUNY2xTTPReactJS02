import React, { Component, Fragment } from 'react';

class UserEditForm extends Component {

  constructor (props) {

    super(props);

    this.state = {
      firstName: this.props.userDetails.firstName,
      lastName: this.props.userDetails.lastName,

      displayErrorMessage: false
    }

    this.saveUserDetails = this.saveUserDetails.bind(this);
    this.updateFirstNameField = this.updateFirstNameField.bind(this);
    this.updateLastNameField = this.updateLastNameField.bind(this);

  }

  saveUserDetails () {

    if (this.state.firstName.length < 1
        || this.state.lastName.length < 1) {
      
      this.setState({
        displayErrorMessage: true
      });

      return;
    }

    this.setState({
      displayErrorMessage: false
    });

    this.props.saveUserDetails({
            firstName: this.state.firstName,
            lastName: this.state.lastName
    });
  }

  updateFirstNameField (e) {
    this.setState({ firstName: e.target.value });
  }

  updateLastNameField (e) {
    this.setState({ lastName: e.target.value });
  }

  render () {
    return (

      <div className = "edit-form">

        <div className = "field-wrapper">

          <label htmlFor = "first-name">
                  First Name
          </label>
          <input type="text" 
                  name = "first-name" 
                  value = { this.state.firstName }
                  onChange = { this.updateFirstNameField }
          />
        </div>

        <div className = "field-wrapper">
          <label htmlFor = "last-name">
            Last Name
          </label>
          <input type="text" 
            name = "last-name" 
            value = { this.state.lastName }
            onChange = { this.updateLastNameField }
          />
        </div>

        <div className = "controls-wrapper">
     
          <button 
            onClick = { this.saveUserDetails }>
            Save
          </button>

          <button 
            onClick = { this.props.disableEditMode }
          >
            Cancel
          </button>
          
        </div>

        { (this.state.displayErrorMessage) && (
        
          <p className = "error">Please fill in all fields!</p>

        ) }
      </div>

    )
  }
}

export default UserEditForm;