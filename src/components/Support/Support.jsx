import React, { Component } from 'react';

// Style
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, Typography } from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../style/Style.css';

//  Alert
import swal from 'sweetalert';


const theme = createMuiTheme({
    palette: {
        primary: {
            main:orange[900],
            dark: orange[400]},
        secondary: {
            main: orange[400],
            dark: orange[900]
        }
    }
})

class Support extends Component {

    state ={
        support: ''
    }

    // Throwing an alert of the question is not answered
    // And send a dispatch to the reducer on click of the next button
    goToComments = () =>{
         if(this.state.support === ''){
            swal({
                icon: 'warning',
                title: 'This field is required'
            })
            return;
        }
        this.props.history.push('/comments');
        this.props.dispatch({type: 'support', payload: this.state.support})
    }

    // going to the prevous page
    goToUnderstanding = () => {
        this.props.history.push('/understanding');

    }

    // setting the state
    handleChange = event => {
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (
             <MuiThemeProvider theme={theme}>
                <Box boxShadow={3} maxWidth={500} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                    <Typography variant="h3">Support</Typography >
                    <Box fontStyle="italic">
                        <Typography variant="caption">How well are you being supported?</Typography>
                    </Box>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="Support" name="radio" row={true} onChange={event => this.handleChange(event)}>
                            <FormControlLabel labelPlacement='top' value='0' control={<Radio />} label="0" />
                            <FormControlLabel labelPlacement='top' value='1' control={<Radio />} label="1" />
                            <FormControlLabel labelPlacement='top' value='2' control={<Radio />} label="2" />
                            <FormControlLabel labelPlacement='top' value='3' control={<Radio />} label="3" />
                            <FormControlLabel labelPlacement='top' value='4' control={<Radio />} label="4" />
                            <FormControlLabel labelPlacement='top' value='5' control={<Radio />} label="5" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant='contained' color='primary' onClick={this.goToUnderstanding}>previous</Button>
                <Button variant='contained' color='primary' onClick={this.goToComments}>next</Button>
                </Box>
             </MuiThemeProvider>
        ) // return
    } // render
} //class

export default Support;