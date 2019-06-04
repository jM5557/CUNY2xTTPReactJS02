import React, { Component, Fragment } from 'react';

class Folder extends Component {

	constructor (props) {

		super(props);

		this.state = {

			folder: {

				name: "Home",

				contents: [
					"File1",
					"File2",
					"File3"
				]

			},

			isVisible: true

		}

		this.toggleVisibility = this.toggleVisibility.bind(this);

	}

	toggleVisibility () {

		this.setState({ 
			isVisible: !this.state.isVisible 
		});

	}

	render () {

		let folderContents = this.state.folder.contents.map((c, i) => {
			return (

				<li>{ c }</li>

			)
		});

		return (
			<div className = "folder-inner-wrapper">

				<h3 
					onClick = { this.toggleVisibility }

					className = "folder-title"
				>
					<span>{ this.state.folder.name }</span>

					<button 
						onClick = { this.toggleVisibility }
						className = "expando-button"
					>
						{ ( !this.state.isVisible ) ? 'Expand' : 'Hide' }
					</button>
				</h3>
			 
			 {(this.state.isVisible) &&

				<ul className = "folder-contents">
					{ folderContents }
				</ul>

			 }
			</div>

		);

	}

}

export default Folder;