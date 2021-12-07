import React, { Component } from 'react';
import callApi from '../../../callApi';

export default class Login extends Component {
    one_user=[];
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            users_arr:[],

        }
    }
    componentDidMount() {
        callApi(`/users`, 'GET', null).then(user => {             
            this.setState({               
                users_arr: user.data
            })
            console.log(this.state.users_arr)
        });
    }


    onChangeLogin=(event)=>{
        
        let nameofInput=event.target.name;
        let valueofInput=event.target.value;
        this.setState({[nameofInput]:valueofInput})
       
    }

    CheckLogin=()=>{ 
        let nhanbiet=0;
       this.state.users_arr.map((user)=>{       
           if(this.state.username ==user.nameaccount&&this.state.password==user.password && user.status=== "unlock"){
               alert('Đăng nhập thành công');
                //đẩy vào mảng đầu tiên rỗng
                this.one_user.push(this.state.username);
                //Đẩy vào local
                localStorage.setItem('user',JSON.stringify(this.one_user));        
             this.props.history.push('/');   
           }else{
               nhanbiet++;            
           }
       }      
       )
       if(nhanbiet==this.state.users_arr.length){
           alert('Đăng nhập không thành công');
       }      
    }

  
    render() {
        return (
            <div className="container-fluid" id="login"  >
                <div className="header-main">
                    <h1 style={{ color: 'black', fontWeight: 'bold' }}>Đăng Nhập</h1>
                    <div className="header-bottom">
                        <div className="header-right w3agile">
                            <div className="header-left-bottom agileinfo">
                                <form onSubmit={this.CheckLogin}>
                                    <input onChange={this.onChangeLogin} style={{ color: 'black', fontWeight: 'bold' }} type="text" name="username" placeholder=" Enter Your User_name" />
                                    <input onChange={this.onChangeLogin} style={{ color: 'black', fontWeight: 'bold' }} type="password" name="password" placeholder="Enter Your Password" />
                                    <div className="remember">

                                        <div className="forgot">
                                            <h6><a href="#" style={{ fontWeight: 'bold' }}>Forgot Password?</a></h6>
                                        </div>
                                        <div className="clear"> </div>
                                    </div>
                                  
                                    <input type="submit"    name="login" value='Login'/>
                                </form>

                                <div className="header-left-top">
                                    <div className="sign-up">
                                        <h2>or</h2>
                                    </div>
                                </div>
                                <div className="header-social wthree">
                                    <a href="#" className="face">
                                        <h5>Facebook</h5>
                                    </a>
                                    <a href="#" className="twitt">
                                        <h5>Twitter</h5>
                                    </a>
                                </div>
                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
