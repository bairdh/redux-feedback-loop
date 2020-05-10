import React, {Component} from 'react';
import {TableCell, TableRow} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';
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




    reviewFeedback(event, prop){
        if(prop === 'delete'){
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
                    this.props.getList();
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