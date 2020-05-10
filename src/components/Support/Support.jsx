import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, Typography } from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';


import swal from 'sweetalert';

class Support extends Component {

    state ={
        support: ''
    }

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

    goToFeeling = () => {
        this.props.history.push('/understanding');

    }

    handleChange = event => {
        this.setState({
            support: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Support</h1>
                <p>Rate how supported you feel today, between 1-5</p>
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
                <Button variant='contained' onClick={this.goToComments}>next</Button>
                <Button variant='contained' onClick={this.goToUnderstanding}>previous</Button>
            </div>
        ) // return
    } // render
} //class

export default Support;