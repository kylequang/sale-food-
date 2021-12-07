import React, { Component } from 'react';
import Header from './header';
import Body from './body';

class HomeAdmin extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div class="row">
                    <Header></Header>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    <Body></Body>
                </div>
            </div>
        );
    }
}

export default HomeAdmin;