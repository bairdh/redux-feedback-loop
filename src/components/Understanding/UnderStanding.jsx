import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Input from '@material-ui/core/Input';
import swal from 'sweetalert';

class Understanding extends Component {

    state = {
        understanding: ''
    }

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

    goToFeeling = () =>{
        this.props.history.push('/');

    }

    handleChange = (event) =>{
        this.setState({
            understanding: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Understanding</h1>
                <p>Rate you're understanding of today, between 0-5</p>
                <Input type='number' placeholder="UnderStanding" onChange={(event)=>{this.handleChange(event)}}/>
                {/* <div>
                    <Radio 
                        onChange={this.radioToggle}
                        value='1'
                        name="radio"
                        inputProps={{'aria-label': '1'}}/>
                    <Radio 
                        onChange={this.radioToggle}
                        value='2'
                        name="radio"
                        inputProps={{'aria-label': '2'}}/>
                    <Radio 
                        onChange={this.radioToggle}
                        value='3'
                        name="radio"
                        inputProps={{'aria-label': '3'}}/>
                    <Radio 
                        onChange={this.radioToggle}
                        value='4'
                        name="radio"
                        inputProps={{'aria-label': '4'}}/>
                    <Radio 
                        onChange={this.radioToggle}
                        value='5'
                        name="radio"
                        inputProps={{'aria-label': '5'}}/>
                </div> */}


                <Button variant='contained' onClick={this.goToSupport}>next</Button>
                <Button variant='contained' onClick={this.goToFeeling}>previous</Button>
            </div>
        ) // return
    } // render
} //class

export default Understanding;