import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Review extends Component {

    submitFeedback = () => {
        this.props.dispatch({type: 'submit'});

      

    }


    render() {
        return (
            <div>
                <h1>Review</h1>
                <p>Feeling: {this.props.feedback.feeling}</p>
                <p>Understanding: {this.props.feedback.understanding}</p>
                <p>Support: {this.props.feedback.support}</p>
                <p>Comment: {this.props.feedback.comments}</p>

                <Button variant='contained' onClick={this.submitFeedback}>Submit</Button>

            </div>
        ) // return
    } // render
} //class

export default Review;