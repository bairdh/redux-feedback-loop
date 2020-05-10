import React, { Component } from 'react';
//Alert
import swal from 'sweetalert';
// Style
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../style/Style.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[900],
            dark: orange[400]
        },
        secondary: {
            main: orange[400],
            dark: orange[900]
        }
    }
})

class Review extends Component {

    state = {
        feedback: {
            feeling: this.props.feedback.feeling,
            understanding: this.props.feedback.understanding,
            support: this.props.feedback.support,
            comments: this.props.feedback.comments
        }
    }

    // Sending a dispatch to the reducer on click of the submit button
    submitFeedback = () => {
        this.props.dispatch({type: 'submit'});

    }

    // On click of the different results an alert will pop up and 
    // you may change your answer, but if you click out of the alert 
    // or leave it blank it will not dipatch
    // I could not get it to only except numbers, I this could break the code.
    editFeedback = (event, prop) =>{
       swal({
            text: `Edit ${prop}`,
            content: 'input'
        }).then(value => {
            if(value === null || value === ''){
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
            <MuiThemeProvider theme={theme}>
                <Box boxShadow={3} maxWidth={500} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                    <Typography variant="h3">Review FeedBack</Typography >
                    <Box fontStyle="italic">
                        <Typography variant="caption">Click section to make Changes before submitting</Typography>
                    </Box>
                    <Box mb={4} >
                        <Typography className='changeReview' onClick={event => this.editFeedback(event, 'feeling')} >Feeling: {this.state.feedback.feeling}</Typography>
                        <Typography className='changeReview' onClick={event => this.editFeedback(event, 'understanding')}>Understanding: {this.state.feedback.understanding}</Typography>
                        <Typography className='changeReview' onClick={event => this.editFeedback(event, 'support')}>Support: {this.state.feedback.support}</Typography>
                        <Typography className='changeReview' onClick={event => this.editFeedback(event, 'comments')}>Comment: </Typography><Typography> {this.state.feedback.comments}</Typography>
                    </Box>
                    <Button variant='contained' color="secondary"onClick={this.submitFeedback}>Submit</Button>
                </Box>
            </MuiThemeProvider>
        ) // return
    } // render
} //class

export default Review;