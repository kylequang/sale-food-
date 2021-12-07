
import React, { Component } from 'react';
import callApi from '../../../callApi';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
const  temp_user=[];
var input='';

class ShowSearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            _users: [],
        }
    }
    componentDidMount() {
        callApi(`/users`, 'GET', null).then(user => {
            this.setState({
                loading: true,
                _users: user.data
            })      
        });  
    }
     //xóa user
     delete_User = (nameaccount) => {
         //lấy tên account -> lấy được id -> xóa
         let id='';
         this.state._users.map((user)=>{
            if(user.nameaccount==nameaccount){
                id=user.id;
            }
         })
         alert('Tiến hành xóa user');
        callApi(`/users/${id}`, 'DELETE', null).then((user) => {
            this.setState({
                _users: this.state._users.filter(user => user.id != id)
            })
            alert("Xóa thành công");
            window.location.reload();
        })
    }
    render() {
        return (
            <div className="row" style={{ marginTop: '10px' }}>

                <div className='col-lg-1 col-md-1 col-sm1'></div>
                <div className="col-md-10 col-lg-10 col-sm-10">
                    <h1>Search for Users : {input} </h1>
                    <table style={{ border: '1px solid red' }} className="table table-hover" >
                        <thead style={{ border: '1px solid red' }}>
                            <tr>
                                <th>ID</th>
                                <th>fullName</th>
                                <th>nameaccount</th>
                                <th>password</th>
                                <th>email</th>
                                <th>sdt</th>
                                <th>address</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{ border: '1px solid red' }}>
                            {
                                temp_user.map((_user, index) => (

                                    <tr key={index} >
                                        <td>{_user.id}</td>
                                        <td>{_user.fullname}</td>

                                        <td>{_user.nameaccount}</td>
                                        <td>{_user.password}</td>
                                        <td>{_user.email}</td>
                                        <td>{_user.sdt}</td>
                                        <td>{_user.sdt}</td>
                                        <td>
                                            <Link to={`/edit_user/${_user.id}`}>
                                                <span className="badge badge-warning text-white">edit</span>
                                            </Link>
                                        </td>
                                        <td><button type='submit' className="badge badge-danger" onClick={() => this.delete_User(_user.nameaccount)}>remove</button></td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-1 col-md-1 col-sm'></div>
            </div>

        );
    }
}



class SearchUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            fullname: '',
            nameaccount: '',
            password: '',
            email: '',
            sdt: '',
            address: '',
            user: [],
            nhanbiet: 0,
            length:0,
            value: ''
        }
    }
    componentDidMount() {
        callApi(`/users`, 'GET', null).then(user => {
            this.setState({
                user: user.data
            })
        });
    }
    
    Search = () => {
        alert("Tiến hành tìm kiếm User");
        const { value } = this.state;
        input=value;

        this.state.user.map((user, index) => {
            //Hàm includes tìm kiếm trả về true
            if (user.id.includes(Number(value)) == true
            ||user.fullname.includes(value)==true
            ||user.nameaccount.includes((value))==true
            ||user.sdt.includes(value)==true
                // ||user.address.search(value) 
            ) {
                temp_user[index] = user;
                this.setState({
                    nhanbiet: this.state.nhanbiet++
                });
            }
            else { //nếu ko thì tăng biến nhận biết lên
                this.setState({
                    length: this.state.length++,
                });
            }
        } 
        )

        if(this.state.length==this.state.user.length){
            this.setState({
                nhanbiet:0
            })
            alert("Không tìm thấy thông tin user");
            this.setState({
                length:0
            })
        }
    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        if (this.state.nhanbiet !=0 ) {
            return (
                <ShowSearchUser></ShowSearchUser>
            )
        }
        else if (this.state.nhanbiet == 0) {
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-1 col-md-1 col-sm1'></div>
                        <div className="col-md-10 col-lg-10 col-sm-10">
                            <input onChange={this.onChangeInput} type='text' name='input_Search' placeholder='Search User' />
                            <button type='submit' onClick={this.Search}><i className="fa fa-search"></i></button>
                        </div>
                        <div className='col-lg-1 col-md-1 col-sm1'></div>
                    </div>
                </div>
            );
        }
    }
}

export default SearchUser;