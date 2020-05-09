import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comments extends Component{

    state = {
        comments: ''
    }

    goToReview = () => {
        this.props.history.push('/review');
        this.props.dispatch({type: 'comments', payload: this.state.comments});
    }

    handleChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }


    render(){
        return(
            <div>
                <h1>Comments</h1>
                <TextField
                    label="Comments"
                    id="outlined-margin-normal"
                    placeholder="Comments"
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    multiline={true}
                    onChange={event => this.handleChange(event)}/>
                    <br/>

                <Button variant='contained' onClick={this.goToReview}>next</Button>

            </div>
        ) // return
    } // render
} //class

export default Comments;