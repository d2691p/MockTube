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
		this.state = { searchTerm: '' };
	}

	render() {
		return (
			//Setting the state based on an event (text input), re-renders every new input
			// <div>
			// 	<input onChange={event => this.setState({searchTerm: event.target.value})} />	
			// </div>
			//<p>Value of the input:</p> {this.state.searchTerm} //Get value of the state
		
			<div className="search-bar">
				<input 
					value={this.state.searchTerm}
					onChange={event => this.onInputChange(event.target.value)} 
				/>	
			</div>
		);
	}

	onInputChange(searchTerm){
		this.setState({searchTerm});
		this.props.onSearchTermChange(searchTerm);
	}

}

export default SearchBar;