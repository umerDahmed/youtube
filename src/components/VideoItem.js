import React from "react";
import './comp.css'
const VideoItem =({video , onSelectVideo })=>
{
 return(
    <div className='box' onClick={()=>onSelectVideo(video)}>
        <ul className="list-group list-group-horizontal ">

    <img className="list-group-item " style={{border:'none'}} src={video.snippet.thumbnails.medium.url} alt="" />
    <div>
   <p className="title"> {video.snippet.title} </p> 
   <br />
   <p className="description"> {video.snippet.description} </p> 
    </div>
        </ul>
    </div>
 )
};

export default VideoItem;
