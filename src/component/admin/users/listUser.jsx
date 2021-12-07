import React, { Component } from 'react';

import { BoxLoading, CommonLoading,EatLoading } from 'react-loadingg';

import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import callApi from '../../../callApi';
import SearchUser from './SearchUser';

export class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            _users: [],

            unlock: "unlock",
            lock: "lock",
        }
    }

    componentDidMount=async()=> {
      await  callApi(`/users`, 'GET', null).then(user => {
            this.setState({
                loading: true,
                _users: user.data
            })
            console.log(this.state._users.length)
        });
    }

    //xóa user
    delete_User = (id) => {
        callApi(`/users/${id}`, 'DELETE', null).then((user) => {
            this.setState({
                _users: this.state._users.filter(user => user.id != id)
            })
            alert("Xóa thành công");
        })
    }
    render() {
        const { loading, _users } = this.state;
        if (!loading) {

            return (
                <div>
                    {/* <BoxLoading />
                    <CommonLoading /> */}
                 
                    <EatLoading />
                </div>
            )
        }
        return (
            <div className="container-fluid " >
                <br></br>
                <SearchUser></SearchUser>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className='col-lg-1 col-md-1 col-sm1'></div>
                    <div className="col-md-10 col-lg-10 col-sm-10">
                        <br></br>
                        <h2>List User</h2>
                        <table style={{ border: '1px solid red' }} className="table table-hover" >
                            <thead style={{ border: '1px solid red' }}>
                                <tr>
                                    <th>ID</th>
                                    <th>fullname</th>
                                    <th>nameaccount</th>
                                    <th>password</th>
                                    <th>email</th>
                                    <th>sdt</th>
                                
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid red' }}>
                                {
                                    _users.map((_user, index) => (
                                        <tr key={index} >
                                            <td>
                                                <span className='btn btn-warning' > {_user.id} </span>
                                            </td>
                                            <td>{_user.fullname}</td>
                                            <td>{_user.nameaccount}</td>
                                            <td>{_user.password}</td>
                                            <td>{_user.email}</td>
                                            <td>{_user.sdt}</td>                                           
                                            <td>
                                                <Link to={`/edit_user/${_user.id}`}>
                                                    <span className="badge badge-warning text-white">edit</span>
                                                </Link>
                                            </td>
                                            <td><button type='submit' className="badge badge-danger" onClick={() => this.delete_User(_user.id)}>remove</button></td>
                                            <td>
                                                {_user.status}
                                            </td>
                                            <td>
                                                <BootstrapSwitchButton
                                                    onstyle="danger"
                                                    offstyle="dark"
                                                    onChange={() => {
                                                        if (_user.checkstatus == true) { //Trạng thái đang true mà thay đổi-> khóa tài khoản
                                                           
                                                            let user = {
                                                                status: this.state.lock, //trạng thái lock
                                                                checkstatus: !_user.checkstatus //ngược lại của true là false
                                                            }
                                                            callApi(`/users/${_user.id}`, "PUT", user).then((user) => {
                                                                alert('Khóa tài khoản thành công');
                                                                 window.location.reload();
                                                            })
                                                        } else { // else -> trạng thái đang tắt mà thay đổi -> unlock tài khoản
                                                            let user = {
                                                                status: this.state.unlock, //thiết lập lại trang thái
                                                                checkstatus: !_user.checkstatus // thiết lập true
                                                            }
                                                            //Tiến hành cập nhật tài khoản user
                                                            callApi(`/users/${_user.id}`, "PUT", user).then((user) => {
                                                                alert('Mở tài khoản thành công');
                                                              
                                                                window.location.reload();
                                                            })
                                                        }
                                                    }}
                                                    checked={_user.checkstatus} //kiểm tra trạng thái hiện có
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-1 col-md-1 col-sm'></div>
                </div>
            </div>
        )
    }
}
export default ListUsers;
