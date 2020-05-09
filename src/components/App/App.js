import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    feedback: []
  }

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = () => {
    axios.get('/feedback').then(res => {
      this.setState({
        feedback: res.data
      })
    }).catch(err => {
      console.log(err);
      alert(`ERROR in GET, see log.`)
    })
  }

  submitFeedback = () =>{
    
  }

  render() {
    console.log(this.state.feedback);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

const reduxDOM = (reduxState) =>({reduxState});
export default connect(reduxDOM)(App);
