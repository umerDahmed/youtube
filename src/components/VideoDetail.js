import React from "react";
import './comp.css';
const VideoDetail =({video}) =>{

    if(!video)
    return <div> </div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
 return(
  <div style={{margin:'10px'}}>
    <div>
    <iframe src={videoSrc} frameborder="0" className="iframe"></iframe> 
    </div> 
    <div className="title">
     {video.snippet.title}
    </div>
    <div className="description">
     {video.snippet.description}
    </div>
     </div>
    
)}
export default VideoDetail ;