import React, {Component} from 'react';

// Style
import '../style/Style.css';
import Box from '@material-ui/core/Box';

class Header extends Component{
    render(){
        return(
            <Box borderRadius="borderRadius" boxShadow={4} className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
                {/* <HashRouter>
                    <Link to='/'>HOME</Link>
                </HashRouter> */}
            </Box>
        ) // return
    } // render
} // class

export default Header;