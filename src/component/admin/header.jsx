import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='container-fluid row' >
        <nav className="navbar navbar-light bg-light fixed-top navbar-expand-xl navbar-expand-lg navbar-expand-sm navbar-expand" >
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="collapsibleNavbar" >
              <ul className="nav navbar-nav">

                <li className="nav-link active  mr-sm-3">
                  <form className='form-inline'>
                    <Link to='/admin'>
                    <button onClick={()=>
                      {
                        window.location.assign('http://localhost:3001/admin')
                    }} 
                      class="fa fa-user"></button>
                    </Link>
                    <i class="fa fa-spinner fa-spin"></i>
                  </form>
                </li>

                <li className="nav-link">
                  <form className="form-inline" >
                    <input name="input_Search" className="form-control mr-sm-3" id="inputsearch" type="search" placeholder="Tìm kiếm?" aria-label="Search" />
                    <i className="fa fa-search"></i>
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <h1 className=''>

                </h1>
                <form className="form-inline" >
                  <li className=' mr-sm-5' >
                    <i class="fa fa-bell"> <span>1</span></i>
                  </li>
                  <Link to='/chatAdmin'>
                  <i class="fa fa-comments"><span>2</span></i>
                    </Link>
                  <li className="nav-link">
                    <button type='button' className="btn btn-sm btn-outline-secondary" name="dangxuat">Đăng Xuất</button>
                  </li>



                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;