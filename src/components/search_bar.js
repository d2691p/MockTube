import React, {Component} from 'react';

//Class based componeont MUST have a render function that returns some JSX
//Functional based component - less functionality than a class
class SearchBar extends Component {
	//All JS classes have constructor function
	constructor(props){
		//References parent method with super
		super(props);

		//Initialises state, with properties we want to record
		//State is a plain javascript object on a component
		this.state = { searchTerm: 'Default Value' };
	}

	render() {
		return (
			//Setting the state based on an event (text input), re-renders every new input
			// <div>
			// 	<input onChange={event => this.setState({searchTerm: event.target.value})} />	
			// </div>
			//<p>Value of the input:</p> {this.state.searchTerm} //Get value of the state
		
			<div>
				<p>value = {this.state.searchTerm}</p>
				<input onChange={event => this.setState({searchTerm: event.target.value})} />	
			</div>
		);
	}

}

export default SearchBar;