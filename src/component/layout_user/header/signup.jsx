import React, { Component } from 'react';
import callApi from '../../../callApi';

import emailjs from 'emailjs-com';

export default class Signup extends Component {
  one_user = [];
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      address: '',
      nameaccount: '',
      sdt: '',
      password: '',
      confirmpass: '',
      email: '',
      status: "unlock",
      checkstatus: true,
      users_arr: [],
    }
  }




  //Hàm gửi mail bằng emailjs
  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_16kb5ii', 'template_pk6idtd', e.target, 'user_mYV3rMZGGDjTx0cxgLYxN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



  componentDidMount=async()=> {
    await callApi(`/users`, 'GET', null).then(user => {
      this.setState({
        users_arr: user.data
      })
    })
  }


  onChangeSignup = (event) => {
    let nameOfInput = event.target.name;
    let valueOfInput = event.target.value;
    this.setState({ [nameOfInput]: valueOfInput })
  }


  CheckSignup= (e)=> {
    const { fullname,
      address,
      nameaccount,
      sdt,
      password,
      confirmpass,
      email } = this.state;

    if (password != confirmpass) {
      alert('Mật khẩu không trùng khớp');
    } else if (nameaccount == '' || email == '' || password == '' || confirmpass == '') {
      alert('Nhập thiếu thông tin');
    }
    else {
      let nhanbiet = 0;

      this.state.users_arr.map((user) => {
        if (nameaccount === user.nameaccount || email === user.email) {
          nhanbiet = 1;
        } else {
          nhanbiet++;
        }
      }
      )

      if (nhanbiet == this.state.users_arr.length) {
        let userss = {
          fullname: 'le quang ky',
          nameaccount: this.state.nameaccount,
          password: this.state.password,
          email: this.state.email,
          sdt: '123',
          status: this.state.status,
          checkstatus: this.state.checkstatus,
          address: 'đà nẵng',
        }
        callApi(`/users`, 'post', userss).then((usser) => {
          alert("Đăng kí tài khoản thành công")
          this.one_user.push(userss.nameaccount);
          localStorage.setItem('user', JSON.stringify(this.one_user));
          this.props.history.push('/');
        });



        e.preventDefault();
        emailjs.sendForm('service_16kb5ii', 'template_pk6idtd', e.target, 'user_mYV3rMZGGDjTx0cxgLYxN')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });



      } else {
        alert('Tài khoản đã tồn tại')
      }
    }
  }


  render() {
    return (
      <div className="header" id='login'>

        {/* MỞ from */}
        <form className="contact-form" onSubmit={this.CheckSignup} >
          <div className="header-main">
            <h1 style={{ color: 'black', fontWeight: 'bold' }}>Đăng Kí</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <input onChange={this.onChangeSignup} style={{ color: 'white', fontWeight: 'bold' }} placeholder='User Name' type="text" name="nameaccount" />
                  <input onChange={this.onChangeSignup} style={{ color: 'white', fontWeight: 'bold' }} placeholder='email' type="email" name="email" />
                  <input onChange={this.onChangeSignup} style={{ color: 'white', fontWeight: 'bold' }} placeholder='password' type="password" name="password" />
                  <input onChange={this.onChangeSignup} style={{ color: 'white', fontWeight: 'bold' }} placeholder='password' type="password" name="confirmpass" />
                  <div className="remember">
                    <span className="checkbox1">
                      <label className="checkbox" style={{ color: 'black', fontWeight: 'bold' }}><input type="checkbox" name defaultChecked /><i> </i>Remember
                            me</label>
                    </span>
                    <div className="clear">
                    </div>
                  </div>
                  <input type="submit" value="Send" />
                  {/* onClick={this.CheckSignup} */}

                  <div className="header-left-top">
                    <div className="sign-up">
                      <h2>or</h2>
                    </div>
                  </div>
                  <div className="header-social wthree">
                    <a href="https://vi-vn.facebook.com/" className="face">
                      <h5>Facebook</h5>
                    </a>
                    <a href="https://twitter.com/?lang=vi" className="twitt">
                      <h5>Twitter</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
        {/* ĐÓNG FROM */}
      </div>
    )
  }
}
