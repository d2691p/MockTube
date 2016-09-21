import React from 'react'
import VideoListItem from './video_list_item';

//Props passed as videos from parent (index.js)
const VideoList = (props) => {
	const videoItems = props.videos.map(function(video){
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	);
};

export default VideoList;