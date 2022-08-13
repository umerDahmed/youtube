import React from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import Yt from './components/Yt';
 class App extends React.Component {
  state = {videos : [] , selectedVideo : null };
  TermSubmit= async (term)=>
  {
 const response =  await Yt.get('/search' , {
    params :{
      q: term
    } 
  });
  this.setState({videos :response.data.items});
};
 onSelectVideo = (video)=>{
    this.setState({selectedVideo: video})
 }

render(){
  return (
    <div>
    <SearchBar onFormSubmit = {this.TermSubmit}/>
    <VideoDetail video = {this.state.selectedVideo}/>
    <VideoList videos={this.state.videos} onSelectVideo ={this.onSelectVideo}/>
    </div>
  );
}
}
export default App;
