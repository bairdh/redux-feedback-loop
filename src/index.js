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

const getFeedBack = (state = [], action) => {
    axios.get('/admin').then(res =>{
        return res.data
    }).catch(err =>{
        console.log(err);
        alert(`ERROR in GET, see log.`)
    })
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

    return state;
}

const store = createStore(postFeedback);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
