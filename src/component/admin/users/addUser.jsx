import React, { Component } from 'react';
import callApi from '../../../callApi';

export default class AddUser extends Component {
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
            user:[],
        }    
    }
    componentDidMount(){
       
        callApi(`/users`,'GET',null).then((user)=>{
            this.setState({
                user:user.data
            })
        })
    }
    
    add_user = () => {
        

        let user = {
            fullname: this.state.fullname,
            nameaccount: this.state.nameaccount,
            password: this.state.password,
            email: this.state.email,
            sdt: this.state.sdt,
            address: this.state.address,
            status:"unlock",
            checkstatus:true,
        };

      if(this.checkAddUser(user)==0){
        callApi(`/users`,'post',user).then((usser)=>{
            console.log(usser);
            alert('Thêm thành công');
            this.props.history.push('/admin');
        });
      }else{
          alert("Thông tin đã tồn tại! Vui lòng kiểm tra lại")
      }
    }
    checkAddUser=(users)=>{
        let nhanbiet=0;
            this.state.user.map((user)=>{
                if(users.nameaccount===user.nameaccount||users.sdt===user.sdt||users.email===user.email){
                    nhanbiet++;
                }
            })
            return nhanbiet;
        }
        
        
    render() {
        return (
            <div className="container-fluid" style={{marginTop:'10px'}}>
                <div className="row text-info bg-dark" style={{backgroundColor:'red'}}>
                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                    <div className="col--lg-6 col-md-6 col-sm-6">
                        <h1 style={{textAlign:'center'}} >Add User</h1>
                        <div className="form-group">
                            <label>FullName</label>
                            <input type="text" className="form-control" value={this.state.fullname}
                                onChange={(e) => this.setState({ fullname: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label>Nameaccount</label>
                            <input type="text" className="form-control" value={this.state.nameaccount}
                                onChange={(e) => this.setState({ nameaccount: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>SDT</label>
                            <input type="number" min='100000000' className="form-control" value={this.state.sdt}
                                onChange={(e) => this.setState({ sdt: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" value={this.state.address}
                                onChange={(e) => this.setState({ address: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.add_user}>ADD</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                </div>
            </div>
        )
    }
}
