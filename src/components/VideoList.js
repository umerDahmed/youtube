import React from 'react'
import VideoItem from './VideoItem';
import './comp.css';

const VideoList = ({videos , onSelectVideo }) =>
{
   const RenderedList =  videos.map((video) =>
    {      
        return <VideoItem  onSelectVideo  = {onSelectVideo} video={video}/>
    });
    return <div>{RenderedList}</div>
};

export default VideoList;
