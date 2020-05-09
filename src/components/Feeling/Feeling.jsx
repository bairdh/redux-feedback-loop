import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Label from '@material-ui/core/InputLabel';
import swal from 'sweetalert';


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
            <div>
                <h1>Feeling</h1>
                <p>Rate how you're feeling today between 0-5</p>
                {/* <Label>How are you feeling today? </Label> */}
                <Input type='number' required placeholder="Feeling" onChange={(event) => this.handleChange(event)}/>
                <Button variant='contained' onClick={this.goToUnderstanding}>next</Button>
            </div>
        ) // return
    } // render
} //class

export default Feeling;