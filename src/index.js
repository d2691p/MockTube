import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyCQvXTedvQyDzC4aHGhLnNV1TJMwvmyefI";

//Create a component to produce some HTML
// Class based component is used when we need a concept of STATE
// Functional based component when we have a simple component that takes values and returns JSX
class App extends Component {
	//Initiates state
	constructor(props){
		super(props);

		//Start as an empty array
		this.state = { 
			videos: [], 
			selectedVideo: null
		};

		this.videoSearch('JavaScript React');
	}

	videoSearch(searchTerm) {
		//Uses the searchTerm on youtube API and populate array
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	//Passing prop videos to VideoList
	//Lodash ( _ ), throttles the call, prevent constant updates
	render() {
		const videoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

//Put generated HTML onto page
ReactDOM.render(<App />, document.querySelector('.container'));
