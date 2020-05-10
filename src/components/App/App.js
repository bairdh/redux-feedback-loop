import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/UnderStanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';

import '../style/Style.css';

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
    console.log(this.props.reduxState);
    
    return (
      <div className="App">
       <Header/>
        <HashRouter>
          <Route exact path='/'
                  render={(props) => <Feeling {...props} dispatch={this.props.dispatch}/>}></Route>
          <Route path='/understanding' 
                  render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />}></Route>
          <Route path='/support' 
            render={(props) => <Support {...props} dispatch={this.props.dispatch} />}></Route>
          <Route path='/comments' 
                  render={(props) => <Comments {...props} dispatch={this.props.dispatch}/>}></Route>
          <Route path='/review' 
                  render={(props) => <Review {...props} dispatch={this.props.dispatch} feedback={this.props.reduxState}/>}></Route>
          <Route path='/admin' 
                  render={props => <Admin {...props}>}></Route>
        </HashRouter>
        <br/>
      </div>
    );
  }
}

const reduxDOM = (reduxState) =>({reduxState});
export default connect(reduxDOM)(App);
