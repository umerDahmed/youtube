import React from 'react'
import './comp.css'
export default class SearchBar extends React.Component {
    state ={ Text:' '};
    textChange=(e)=>
    {
            this.setState({Text:e.target.value}); 
    }
    formSubmit = event=>{
       event.preventDefault() ;
       this.props.onFormSubmit(this.state.Text);
    };
    render(){
  return (
    <div>
        <form   onSubmit={this.formSubmit}>
            <label htmlFor="video" className='form'>Search the video</label>
            <input type="text" id='video' className='form'  value={this.state.Text} onChange={this.textChange} />
        </form>
    </div>
  );
    }
}
