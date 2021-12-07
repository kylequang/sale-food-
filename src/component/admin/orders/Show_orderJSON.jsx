import React, { Component } from 'react';
import Delivered from './delivered';
import Wait_Confirm from './waitCofirm';
import Waitingfordelivery from './waitingfordelivery';

class Show_orderJSON extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <br></br>
        <div className='row'>
          <ul className="nav nav-tabs flex-column flex-sm-row" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab-users" data-toggle="tab" href="#content-xacnhan" role="tab" aria-controls="content-javascript" aria-selected="false">
                Chờ xác nhận<span> </span>
               </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab-products" data-toggle="tab" href="#content-giaohang" role="tab" aria-controls="content-css" aria-selected="false">
                Chờ giao hàng
                            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id="tab-orders" data-toggle="tab" href="#content-dagiao" role="tab" aria-controls="content-bootstrap" aria-selected="true">
                Đơn hàng đã được giao
                            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " id="tab-toltal" data-toggle="tab" href="#content-bihuy" role="tab" aria-controls="content-bootstrap" aria-selected="true">
                Đơn hàng bị hủy
                            </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="content-xacnhan" role="tabpanel" aria-labelledby="tab-javascript">
              <Wait_Confirm> </Wait_Confirm>
            </div>
            <div className="tab-pane fade" id="content-giaohang" role="tabpanel" aria-labelledby="tab-css">
              <Waitingfordelivery></Waitingfordelivery>
            </div>
            <div className="tab-pane fade  " id="content-dagiao" role="tabpanel" aria-labelledby="tab-bootstrap">
              <Delivered></Delivered>
            </div>
            <div className="tab-pane fade show " id="content-bihuy" role="tabpanel" aria-labelledby="tab-bootstrap">
              đơn bị hủy
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Show_orderJSON;