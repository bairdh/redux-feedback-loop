import React, { Component } from 'react';
// Alerts
import swal from 'sweetalert';
// Style
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {orange } from '@material-ui/core/colors';
import '../style/Style.css';


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

class Understanding extends Component {

    state = {
        understanding: ''
    }

     // Throwing an alert of the question is not answered
    // And send a dispatch to the reducer on click of the next button
    goToSupport = () =>{
         if(this.state.understanding === ''){
            swal({
                icon: 'warning',
                title: 'This field is required'
            })
            return;
        }
        this.props.history.push('/support');
        this.props.dispatch({type: 'understanding', payload: this.state.understanding});
    }

    // going back to the previous page
    goToFeeling = () =>{
        this.props.history.push('/');
    }

    // setting the state
    handleChange = (event) =>{
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box boxShadow={3} maxWidth={500} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                    <Typography variant="h3">Understanding</Typography>
                    <Box fontStyle="italic">
                        <Typography variant="caption">How well are you understanding the content?</Typography>
                    </Box>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="Feeling" name="radio" row={true} onChange={event => this.handleChange(event)}>
                            <FormControlLabel labelPlacement='top' value='0' control={<Radio/>} label="0"/>
                            <FormControlLabel labelPlacement='top' value='1' control={<Radio/>} label="1"/>
                            <FormControlLabel labelPlacement='top' value='2' control={<Radio/>} label="2"/>
                            <FormControlLabel labelPlacement='top' value='3' control={<Radio/>} label="3"/>
                            <FormControlLabel labelPlacement='top' value='4' control={<Radio/>} label="4"/>
                            <FormControlLabel labelPlacement='top' value='5' control={<Radio/>} label="5"/>
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <Button mx={4} variant='contained' color='primary' onClick={this.goToFeeling}>previous</Button>
                    <Button mx={10} variant='contained' color='primary' onClick={this.goToSupport}>next</Button>
                </Box>
            </ MuiThemeProvider>
        ) // return
    } // render
} //class

export default Understanding;