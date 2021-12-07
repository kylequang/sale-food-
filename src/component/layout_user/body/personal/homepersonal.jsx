import React, { Component } from 'react';
import Header from '../../header/header';
import FollowOrders from './orders/followOrders';
import Info from './info';
import Member from '../../footer/member';
import Footer from '../../footer/footer';


class Homepersonal extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Header></Header>

                <div className='row' id='homepersonal' >
                    <div className="col-lg-2 col-sm-2 col-md-2">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-infor" role="tab" aria-controls="v-pills-home" aria-selected="true">Thông tin cá nhân</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-profile" aria-selected="false">Lịch sử đơn hàng</a>

                        </div>
                    </div>

                    <div className='col-lg-10 col-md-10 col-sm-10'>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-infor" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <Info></Info>
                            </div>
                            <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <FollowOrders></FollowOrders>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                <br></br>
                <hr style={{backgroundColor:"black"}}></hr>
              <Member></Member>
              <br></br>
              <Footer></Footer>
            </div>
        );
    }
}

export default Homepersonal;