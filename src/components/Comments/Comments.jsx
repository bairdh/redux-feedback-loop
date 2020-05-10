import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

class Comments extends Component{

    state = {
        comments: ''
    }

    // going to the Reviw page
    // And subitting a comment it there is one
    goToReview = () => {
        this.props.history.push('/review');
        if(this.state.comments != ''){
            this.props.dispatch({type: 'comments', payload: this.state.comments});
        }
    }

    // going to the prevous page
     goToSupport = () =>{
        this.props.history.push('/support');

    }

    // setting the state
    handleChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }


    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <Box boxShadow={3} maxWidth={500} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                    <Typography variant="h3">Comments</Typography >
                    <Box fontStyle="italic">
                        <Typography variant="caption">Any comments you want to leave?</Typography>
                    </Box>
                        <TextField
                        label="Comments"
                        id="outlined-margin-normal"
                        placeholder="Comments"
                        inputProps={{ maxLength: 200 }}  
                        helperText={`${this.state.comments.length}/200`}                     
                        margin="normal"
                        variant="outlined"
                        multiline={true}
                        onChange={event => this.handleChange(event)}/>
                        <br/>
                <Button variant='contained' color="primary" onClick={this.goToSupport}>previous</Button>
                <Button variant='contained' color="primary" onClick={this.goToReview}>next</Button>

                </Box>
        </MuiThemeProvider>
    ) // return
    } // render
} //class

export default Comments;