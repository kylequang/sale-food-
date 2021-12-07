import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import callApi from '../../../callApi';


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input_Search: '',
      itemSearch: [],
    }
  }


  deleteLocal_user = () => {
    alert('Đăng xuất thành công');
    localStorage.clear();
    window.location.reload();
  }

  showUser = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    return user[0];
  }

  search = () => {
    callApi('products?name=' + document.getElementById('inputsearch').value, 'GET').then((res) => {
      this.setState({
        input_Search: document.getElementById('inputsearch').value,
      })
      if (res.data) {
        this.setState({
          itemSearch: res.data,
        });
      }
    });
  }

  showSearch = () => {
    if(this.state.itemSearch!=null){
      return (
        <div className='row' style={{marginTop:"80px"}}>
          {
            this.state.itemSearch.map((product) => {
              return (
                <div className='col-lg-3 col-md-3 col-sm-3'>
                  <div className="card" id='img_card' >
                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="sản phẩm được tìm kiếm" />
                    <div className="card-body">
                      <h5 >{product.name}</h5>
                      <strong style={{ color: 'red' }}>{product.price} VND</strong>
                      <h6>{product.status}</h6>
                      <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-5'>
  
                          <button onClick={
                            () => {
                              alert("Bạn Chưa Đăng NHập")
                            }
                          } class="custom-btn btn-add-product"><span>Add!</span><span>Mua ngay</span></button>
  
                        </div>
                        <div className='col-lg-2 col-sm-2 col-md-2'>
                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-5'>
  
                          <button onClick={() => {
                            alert("Bạn chưa đăng nhập")
                          }} class="custom-btn btn-detail-product">Detail</button>
  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
  
            })
          }
        </div>
      )
    }
 
  }



  render() {
    //nếu chưa đăng nhập
    if (localStorage && localStorage.getItem('user') == null) {
      return (
        <div>
          <div className='row'>
            <nav className="navbar fixed-top navbar-expand-xl navbar-expand-lg" style={{ background: 'white' }}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link to='/' className="navbar-brand" style={{ fontWeight: 'bold' }}>Ẩm Thực </Link>
                  <button id="bars" style={{ backgroundColor: 'cornflowerblue', border: 'none' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className="fa fa-bars" />
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar" method="post">
                  <ul className="nav navbar-nav" id="trangchu">
                    <li className="nav-item active mr-sm-3">
                      <a className="btn" href="#">Trang Chủ</a>
                    </li>
                    <li className="nav-item mr-sm-3">
                      <div className="dropdown ">
                        <a className="btn dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown">Ẩm thực</a>

                      </div>
                    </li>

                  </ul>
                  {/* Tìm kiếm và giỏ hàng */}
                  <ul className="navbar-nav ml-auto">
                    <form className="form-inline mr-sm-4">
                      <input className="form-control mr-sm-3" id="inputsearch" type="search" placeholder="Hôm Nay Ăn Gì?" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.search} >Search</button>
                    </form>
                  </ul>

                  {/* Đăng kí đăng nhập */}
                  <ul className="navbar-nav ml-auto">
                    <form className="form-inline" method="post">
                      <li className="nav-link mr-sm-2">
                        <a href="#" className="fa fa-shopping-cart" style={{ color: 'black' }} />
                      </li>
                      <li className="nav-link mr-sm-3">

                        <Link to='/login'>
                          <span className="btn btn-primary">Đăng Nhập  </span>
                        </Link>

                      </li>
                      <li className="nav-link mr-sm-3">

                        <Link to='/signup'>
                          <span className="btn btn-primary"> Đăng Kí</span>
                        </Link>

                      </li>
                    </form>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
       
          <div>
             {
              this.showSearch()
              }
          </div>
        </div>
      )


    }//ngược lại đã đăng nhập
    else {
      return (
        <div>
          <div className='container-fluid row' >
            <nav style={{ background: ' rgb(194, 190, 183)' }} className="navbar fixed-top navbar-expand-xl navbar-expand-lg navbar-expand-sm navbar-expand" >
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link to='/' className="navbar-brand" style={{ fontWeight: 'bold' }}><img style={{ height: '50px', width: '60px' }} src='images/logo.png' /></Link>
                </div>

                <div className="collapse navbar-collapse" id="collapsibleNavbar" >
                  <ul className="nav navbar-nav">
                    <li className="nav-item active  mr-sm-3">
                      <a className="btn" >Trang Chủ</a>
                    </li>

                    <li className="nav-item mr-sm-3">
                      <div className="dropdown show">
                        <a className="btn dropdown-toggle"  > Địa Điểm </a>

                      </div>
                    </li>
                  </ul>

                  <ul className="navbar-nav ml-auto">
                    <form className="form-inline" method="post">
                      <input name="input_Search" className="form-control mr-sm-3" id="inputsearch" type="search" placeholder="Hôm Nay Ăn Gì?" aria-label="Search" />
                      <button name="search" className="btn btn-outline-success my-2 my-sm-0" onClick={this.search} type="button">Search</button>
                    </form>
                    <form className="form-inline" >
                      <li className="nav-link mr-sm-2">
                        <span className='fa fa-cart-plus'>Cart</span>
                      </li>
                      <li className="nav-link mr-sm-3">
                        <Link to='/personal'>
                          <span className="btn btn-outline-success " ><span className="fa fa-user" >{this.showUser()}</span> </span>
                        </Link>
                      </li>
                      <li className="nav-link mr-sm-3">
                        <input className="btn btn-sm btn-outline-secondary" type="submit" value='Thông Báo' name="thongbao" defaultValue="Thông báo" />
                      </li>
                      <li className="nav-link">
                        <button type='button' onClick={this.deleteLocal_user} className="btn btn-sm btn-outline-secondary" name="dangxuat">
                          <Link to='/'>Đăng Xuất    </Link></button>
                      </li>
                    </form>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div >
            {this.showSearch()}
          </div>
        </div>
      )
    }
  }
}
