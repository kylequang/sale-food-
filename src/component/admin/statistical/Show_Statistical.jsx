import React, { Component } from 'react';
import Day from './day';
import User from './user';
class Show_Statistical extends Component {


  render() {
    return (
      <div className='container-fluid'>
        <br></br>
        <div className="row">
          <div className="nav flex-column nav-pills col-lg-3 col-md-3 col-sm-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Thống Kê Theo Ngày/Tháng/Năm</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Thống kê sản phẩm</a>
            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Thống kê người dùng</a>
          </div>
         
          <div className="tab-content col-lg-8 col-md-8 col-sm-8" id="v-pills-tabContent" style={{marginLeft:"20px"}}>
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Day></Day></div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">profile</div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><User></User></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Show_Statistical;