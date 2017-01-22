import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyASYHWsBVlEb7iCRWWyAQatO1wGPaQE5vY';



//Create a new component. The parenthesis around the div after return are unecssary if the div opening is on the same line as return
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [], 
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({ videos: videos });
		});


	}
	render() {
		return (
		  <div>
			<SearchBar />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList  
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos}  />
		  </div>
		);
	}
}

//Take this component's generated HTML and put it in the DOM		
ReactDOM.render(<App/>, document.querySelector('.container'));

