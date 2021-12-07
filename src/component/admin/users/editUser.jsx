import React, { Component } from 'react';
import callApi from '../../../callApi';
export class EditUser extends Component {
    tempuser = [];
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
            nhanbiet: true,
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        callApi(`/users/${id}`, 'GET', null).then((user) => {
            this.setState({
                id: user.data.id,
                fullname: user.data.fullname,
                nameaccount: user.data.nameaccount,
                password: user.data.password,
                email: user.data.email,
                sdt: user.data.sdt,
                address: user.data.address,
            })  
        });

        // callApi(`/users`, 'GET', null).then((user) => {
        //     Lấy dữ liệu từ api và gán cho mảng tempuser( mảng tạm lưu trữ)
        //     this.tempuser = user.data;
        //    console.log("Tên tài khoản")
        //     Tiến hành xóa phần tử(loại bỏ user mình đang chỉnh sửa)
        //     console.log(this.state.nameaccount)

        //     this.tempuser=this.tempuser.filter(user => user.nameaccount != this.state.nameaccount)
        //     console.log("Lọc");
        //     console.log(this.tempuser)

        //     Tiến hành lấy setState dữ liệu user về và không lấy dữ liệu user mình đang edit
           
        //     this.setState({
        //         user: this.tempuser
        //     });
        //    console.log(this.state.user);
        // })
    }

    update_User = () => {
        if (this.state.fullname == '' || this.state.nameaccount == '' || this.state.password == '' || this.state.email == '' || this.state.sdt == '' || this.state.address == '') {
            alert('Admin nhập thiếu thông tin');
        } else {
            //Biến nhận biết xem thông tin có trùng lặp với user khác
            let nhanbiet = 0;
            //Tiến hành kiểm tra sau khi bấm update-> xem có trùng lặp thông tin key với user khác ko
            this.state.user.map((user) => {
                if (this.state.nameaccount === user.nameaccount || this.state.email === user.email || this.state.sdt === user.sdt) {
                    nhanbiet = 1;
                } else {
                    if (this.state.password.length < 6) {
                        nhanbiet = 2;
                    }
                }
            })
            if (nhanbiet == 0) {
                let user = {
                    fullname: this.state.fullname,
                    nameaccount: this.state.nameaccount,
                    password: this.state.password,
                    email: this.state.email,
                    sdt: this.state.sdt,
                    address: this.state.address,
                }

                callApi(`/users/${this.state.id}`, 'PUT', user).then((_user) => {
                    alert('Cập nhật thành công');
                    this.props.history.push('/admin');
                });
            } else {
                if(nhanbiet==1){
                    alert("Vui lòng kiểm tra lại nameaccount, email, sdt")
                }else{
                    alert("Vui lòng đạt độ dài mật khẩu từ 6 kí tự trở lên")
                }
              
            }
        }
    }

    onChangeEdit = (event) => {
        let nameofInput = event.target.name;
        let valueofInput = event.target.value;
        this.setState({ [nameofInput]: valueofInput })
    }

    render() {
        return (

            <div className="container" id='background_edituser'>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1">
                    </div>
                    <div className="col-md-10 col-lg-10 col-sm-10">
                        <h1>Edit User</h1>
                        <div className="form-group">
                            <label>Fullname</label>
                            <input type="text" name='fullname' className="form-control" value={this.state.fullname}
                                onChange={this.onChangeEdit} />
                        </div>

                        <div className="form-group">
                            <label>Nameaccount</label>
                            <input type="text" name='nameaccount' className="form-control" value={this.state.nameaccount}
                                onChange={this.onChangeEdit} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name='password' className="form-control" value={this.state.password}
                                onChange={this.onChangeEdit} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name='email' className="form-control" value={this.state.email}
                                onChange={this.onChangeEdit} />
                        </div>
                        <div className="form-group" >
                            <label>SDT</label>
                            <input type="text" name='sdt' className="form-control" value={this.state.sdt}
                                onChange={this.onChangeEdit} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name='address' className="form-control" value={this.state.address}
                                onChange={this.onChangeEdit} />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-danger" onClick={this.update_User}>Update</button>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">

                    </div>
                </div>
            </div>
        )
    }
}
export default EditUser;
