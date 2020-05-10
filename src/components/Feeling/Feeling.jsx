import React, { Component } from 'react';
// Alert
import swal from 'sweetalert';

// Style
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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


class Feeling extends Component {

    state = {
        feeling: ''
    }

    goToUnderstanding = () =>{

        if(this.state.feeling === ''){
            swal({
                icon: 'warning',
                title: 'This field is required'
            })
            return;
        }
        this.props.history.push('/understanding');
        this.props.dispatch({type: 'feeling', payload: this.state.feeling})
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
        console.log(event.target.value);
        
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box boxShadow={3} maxWidth={500} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                    <Typography variant="h3">Feeling</Typography >
                    <Box fontStyle="italic">
                        <Typography variant="caption">How are you feeling today?</Typography>
                    </Box>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="understanding" name="radio" row={true} onChange={event => this.handleChange(event)}>
                            <FormControlLabel labelPlacement='top' value='0' control={<Radio />} label="0" />
                            <FormControlLabel labelPlacement='top' value='1' control={<Radio />} label="1" />
                            <FormControlLabel labelPlacement='top' value='2' control={<Radio />} label="2" />
                            <FormControlLabel labelPlacement='top' value='3' control={<Radio />} label="3" />
                            <FormControlLabel labelPlacement='top' value='4' control={<Radio />} label="4" />
                            <FormControlLabel labelPlacement='top' value='5' control={<Radio />} label="5" />
                        </RadioGroup>
                    </FormControl>                    <Button variant='contained' color='secondary' onClick={this.goToUnderstanding}>next</Button>
                </Box>
            </MuiThemeProvider>
        ) // return
    } // render
} //class

export default Feeling;