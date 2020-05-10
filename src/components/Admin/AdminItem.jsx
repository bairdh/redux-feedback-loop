import React, {Component} from 'react';
// Style
import {TableCell, TableRow} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

// Alert
import swal from 'sweetalert';

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

class AdminItem extends Component{
  
    // this sends a dispatch to the reducer to either flag an item or delete it
    reviewFeedback = (event, prop) => {
        if(prop === 'delete'){
            // a prompt asking if they really want to delete
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this feedback!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(willDelete =>{
                if(willDelete){
                    this.props.dispatch({type:prop, payload: this.props.item.id});
                    swal("Feedback has been deleted!", {
                        icon: "success",
                    });
                }
                else{
                    swal("Feedback not deleted.");
                }
            })
            
        }
        else if(prop === 'flagged'){
            this.props.dispatch({type:prop, payload: this.props.item.id});
        }
    }

    render(){
        let flag;
        // This changes the color of the flag depending if it's flagged or not
        if(this.props.item.flagged === false){
            flag = (<ErrorOutlineSharpIcon />)
        }
        else{
            flag = (<ErrorOutlineSharpIcon color='primary'/>)
        }
        return (
            <MuiThemeProvider theme={theme}>
                <TableRow>
                    <TableCell align="center">{this.props.item.feeling}</TableCell>
                    <TableCell align="center">{this.props.item.understanding}</TableCell>
                    <TableCell align="center">{this.props.item.support}</TableCell>
                    <TableCell align="left">{this.props.item.comments}</TableCell>
                    <TableCell align="center"><div onClick={event => this.reviewFeedback(event, 'flagged')}>{flag}</div></TableCell>
                    <TableCell align="center"><DeleteForeverIcon onClick={event => this.reviewFeedback(event, 'delete')}/></TableCell>
                </TableRow>
            </MuiThemeProvider>
        ) //return
    } //render
} //class

export default AdminItem;