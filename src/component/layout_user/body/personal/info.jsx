import React, { Component } from 'react';
import callApi from '../../../../callApi';

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            fullname:'',
            nameaccount:'',
            password:'',
            email:'',
            sdt:'',
            address:'',
        }
    }
    componentDidMount(){
        // let id = this.props.match.params.id;
        console.log(this.props);
        let arr = JSON.parse(localStorage.getItem('user'));   
        callApi(`/users`,'GET',null).then((users)=>{
         
            users.data.map((user) => {
                console.log(typeof user.fullname);
                console.log(typeof arr[0]);
                if(user.nameaccount === arr[0]) {
                    this.setState({
                        id: user.id,
                        fullname: user.fullname,
                        nameaccount: user.nameaccount,
                        password: user.password,
                        email: user.email,
                        sdt: user.sdt,
                        address:user.address,
                       })
                }
            })
            console.log(this.state);
        });
    }


    // update_User = () => {
    //     if (this.state.fullname == '' || this.state.nameaccount == '' || this.state.password == '' || this.state.email == '' || this.state.sdt == '' || this.state.address == '') {
    //         alert('Admin nhập thiếu thông tin');
    //     } else {
    //         //Biến nhận biết xem thông tin có trùng lặp với user khác
    //         let nhanbiet = 0;
    //         //Tiến hành kiểm tra sau khi bấm update-> xem có trùng lặp thông tin key với user khác ko
    //         this.state.user.map((user) => {
    //             if (this.state.nameaccount === user.nameaccount || this.state.email === user.email || this.state.sdt === user.sdt) {
    //                 nhanbiet = 1;
    //             } else {
    //                 if (this.state.password.length < 6) {
    //                     nhanbiet = 2;
    //                 }
    //             }
    //         })
    //         if (nhanbiet == 0) {
    //             let user = {
    //                 fullname: this.state.fullname,
    //                 nameaccount: this.state.nameaccount,
    //                 password: this.state.password,
    //                 email: this.state.email,
    //                 sdt: this.state.sdt,
    //                 address: this.state.address,
    //             }

    //             callApi(`/users/${this.state.id}`, 'PUT', user).then((_user) => {
    //                 alert('Cập nhật thành công');
    //                 this.props.history.push('/admin');
    //             });
    //         } else {
    //             if(nhanbiet==1){
    //                 alert("Vui lòng kiểm tra lại nameaccount, email, sdt")
    //             }else{
    //                 alert("Vui lòng đạt độ dài mật khẩu từ 6 kí tự trở lên")
    //             }
              
    //         }
    //     }
    // }





    update_User = () => {
        let user = {
            fullname:this.state.fullName,
            nameaccount:this.state.nameaccount,
            password:this.state.password,
            email:this.state.email,
            sdt:this.state.sdt,
            address:this.state.address,
        }
        
        callApi(`/users/${this.state.id}`,'PUT',user).then((_user)=>{
            console.log(_user);
           alert('thành công');
          window.location.reload();
        });
    }

    render() {
        return (
            <div className="container" style={{backgroundColor:"#ffcccc"}}>
                <div className="row">
                    <div class="col-lg-2 col-md-2 col-sm-2"> </div>
                    <div className="col-md-8 col-lg-8 col-sm-8 text-white">
                        <h1>Cập nhật thông tin cá nhân</h1>
                        <div className="form-group">
                            <label>Nameaccount</label>
                            <input type="text" className="form-control" value={this.state.nameaccount} disabled/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" value={this.state.password}
                            onChange={(e)=>this.setState({password:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" value={this.state.email}
                            onChange={(e)=>this.setState({email:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>SDT</label>
                            <input type="text" className="form-control" value={this.state.sdt}
                            onChange={(e)=>this.setState({sdt:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" value={this.state.address}
                            onChange={(e)=>this.setState({address:e.target.value})}/>
                        </div>

                        <div className="form-group">
                           <button className="btn btn-primary" onClick={this.update_User}>Update</button>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2"> </div>
                </div>
            </div>
        )
    }
}

export default Info;