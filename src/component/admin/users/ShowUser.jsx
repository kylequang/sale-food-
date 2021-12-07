import React, { Component } from 'react';
import ListUsers from './listUser';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import EditUser from './editUser';
import AddUser from './addUser';
class Show_User extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid " >
                    <br></br>
                    <div className='row'>

                        <div id='btn_user'>
                            <Link to="/admin"> <span className='btn btn-outline-primary active'>List_User </span></Link>
                        </div>
                        <div id='btn_user'>                         
                            <Link to="/add_user"><span className='btn btn-outline-success' >Add_User</span></Link>                           
                        </div>
                      
                    </div>
                </div>
                <Switch>
                    <Route path="/admin" exact component={ListUsers} />
                    <Route path="/edit_user/:id?" component={EditUser} />
                    <Route path="/add_user" component={AddUser} />
                </Switch>
            </Router>
        );
    }
}
export default Show_User;