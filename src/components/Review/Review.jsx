import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter, Link } from 'react-router-dom';
import { Input } from '@material-ui/core';

import swal from 'sweetalert';


class Review extends Component {

    state = {
        feedback: {
            feeling: this.props.feedback.feeling,
            understanding: this.props.feedback.understanding,
            support: this.props.feedback.support,
            comments: this.props.feedback.comment
        }
    }

    submitFeedback = () => {
        this.props.dispatch({type: 'submit'});
    }

    editFeedback = (event, prop) =>{
       swal({
            text: `Edit ${prop}`,
            content:'input'
        }).then(value => {
            if(value === null){
                return;
            }
            this.props.dispatch({type: prop, payload: value});
            this.setState({
                feedback:{
                    ...this.state.feedback,
                    [prop]: value
                }
            })
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <h1>Review</h1>
                <p onClick={event => this.editFeedback(event, 'feeling')} >Feeling: {this.state.feedback.feeling}</p>
                <p onClick={event => this.editFeedback(event, 'understanding')}>Understanding: {this.state.feedback.understanding}</p>
                <p onClick={event => this.editFeedback(event, 'support')}>Support: {this.state.feedback.support}</p>
                <p onClick={event => this.editFeedback(event, 'comments')}>Comment: {this.state.feedback.comments}</p>

                <Button variant='contained' onClick={this.submitFeedback}>Submit</Button>

            </div>
        ) // return
    } // render
} //class

export default Review;