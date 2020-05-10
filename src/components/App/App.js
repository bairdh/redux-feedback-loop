import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';

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
  
  getFeedback = () => {
    axios.get('/feedback/admin').then(res => {
      this.setState({
        feedback: res.data
      })
    }).catch(err => {
      console.log(err);
      alert(`ERROR in GET, see log.`)
    })
  }

  render() {    
    return (
      <div className="App">
       <Header/>
        <HashRouter>
          <Route exact path='/'
                  render={(props) => <Feeling {...props} dispatch={this.props.dispatch}/>}/>
          <Route path='/understanding' 
                  render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />}/>
          <Route path='/support' 
            render={(props) => <Support {...props} dispatch={this.props.dispatch} />}/>
          <Route path='/comments' 
                  render={(props) => <Comments {...props} dispatch={this.props.dispatch}/>}/>
          <Route path='/review' 
                  render={(props) => <Review {...props} dispatch={this.props.dispatch} feedback={this.props.reduxState}/>}/>
          <Route path='/admin' 
            render={props => <Admin {...props} getList={this.getFeedback} review={this.state.feedback} dispatch={this.props.dispatch}/>}/>
        </HashRouter>
        <br/>
      </div>
    );
  }
}

const reduxDOM = (reduxState) =>({reduxState});
export default connect(reduxDOM)(App);
