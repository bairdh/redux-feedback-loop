import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
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
                <Input type='number' placeholder="Support" onChange={event => this.handleChange(event)}/>

                <Button variant='contained' onClick={this.goToComments}>next</Button>
                <Button variant='contained' onClick={this.goToUnderstanding}>previous</Button>
            </div>
        ) // return
    } // render
} //class

export default Support;