import React, {Component} from 'react';
import { Box, Typography } from '@material-ui/core';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';
import AdminItem from './AdminItem';
import Button from '@material-ui/core/Button';
import '../style/Style.css';

class Admin extends Component{

    componentDidMount(){
        this.props.getList();        
    }


    render(){
        
        return (
            <Box boxShadow={3} maxWidth={600} minWidth={400} my={5} mx='auto' py={4} bgcolor="#FFFDE7" className="container">
                <Typography variant='h2'>Feedback Results</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell align="center">Comprehension</TableCell>
                                <TableCell align="center">Support</TableCell>
                                <TableCell align="center">Comments</TableCell>
                                <TableCell align="center">FLAG</TableCell>
                                <TableCell align="center" >DELETE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.review.map(item => 
                                <AdminItem 
                                    key={item.id} 
                                    item={item}
                                    dispatch={this.props.dispatch}
                                    getList={this.props.getList}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        ) // return
    } //render
} // class

export default Admin;