import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const getFeedBack = (state = [], action) => {
    axios.get('/').then(res =>{
        return res.data
    }).catch(err =>{
        console.log(err);
        alert(`ERROR in GET, see log.`)
    })
}

const store = createStore(getFeedBack);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
