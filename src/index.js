import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import swal from 'sweetalert';
// Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const ratings = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const postFeedback = (state = ratings, action) => {
    if(action.type === 'feeling'){
        state.feeling = Number(action.payload);
        console.log(`I got the feels:`, action.payload);
    }
    else if(action.type === 'understanding'){
        state.understanding = Number(action.payload);
        console.log(`You getting me?`, action.payload);
    }
    else if(action.type === 'support'){
        state.support = Number(action.payload);
        console.log(`Hold me up bro:`, action.payload);
    }
    else if(action.type === 'comments'){
        state.comments = action.payload;
        console.log(`Ive got a comment for you`, action.payload);
        return state
    }
    else if(action.type === 'submit'){

        axios.post(`/feedback`, state).then(res => {
            swal({
                title: 'Submit successful!',
                icon: 'success'
            }).then(() => {
                window.location = '/';
            })
            console.log(res);
        }).catch(err =>{
            alert(`ERROR in POST! see console.`);
            console.log(err);
        })
    }
    else if(action.type === 'delete'){
        axios.delete(`/feedback/admin/${action.payload}`)
        .then(res => {
            console.log(res);
        }).catch(err => {
            alert('ERROR in DELETE! see console.');
            console.log(err);
        })
    }
    else if(action.type === 'flagged'){
        axios.put(`/feedback/admin/${action.payload}`)
        .then(res => {
        }).catch(err => {
            alert(`ERROR in PUT! see console`);
            console.log(err)
        })
    }
    // I can't access my feedback array, I think because it's
    // asynchronous. When looking at it on google res.data shows up
    // but once I set in in the state but when I send it to App.js it shows
    // the Array as empty, until you 'unfold it' but I still can't access it.

    // I also orginally wanted to have a separate reducer for the get and post
    // but we never went over it in class so I don't know how to do it...
    // ------------------------------------------
    // else if(action.type === 'get'){
    //     axios.get('/feedback/admin').then(res =>{
    //        console.log(`got GET:`, res.data);
    //        state.feedback = res.data;
    //        return state;
    //     }).catch(err =>{
    //     console.log(err);
    //     alert(`ERROR in GET, see log.`)
    // })
    // }

    return state;
}

const store = createStore(postFeedback);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
