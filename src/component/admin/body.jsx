import React, { Component } from 'react';
import Show_order from './orders/Show_orderJSON';
import ShowProduct from './products/ShowProduct';
import Show_Statistical from './statistical/Show_Statistical';
import Show from './statistical/Show_Statistical';
import ShowUser from './users/ShowUser'

class Body extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <ul className="nav nav-tabs flex-column flex-sm-row" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="tab-users" data-toggle="tab" href="#content-users" role="tab" aria-controls="content-javascript" aria-selected="false">
                                Quản lí Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="tab-products" data-toggle="tab" href="#content-products" role="tab" aria-controls="content-css" aria-selected="false">
                                Quản lí Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="tab-orders" data-toggle="tab" href="#content-orders" role="tab" aria-controls="content-bootstrap" aria-selected="true">
                                Quản lí Orders
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link " id="tab-toltal" data-toggle="tab" href="#content-statistical" role="tab" aria-controls="content-bootstrap" aria-selected="true">
                                Thống Kê
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="content-users" role="tabpanel" aria-labelledby="tab-javascript">
                            <ShowUser> </ShowUser>
                        </div>
                        <div className="tab-pane fade" id="content-products" role="tabpanel" aria-labelledby="tab-css">
                            <ShowProduct></ShowProduct>
                        </div>
                        <div className="tab-pane fade  " id="content-orders" role="tabpanel" aria-labelledby="tab-bootstrap">
                            <Show_order></Show_order>
                        </div>
                        {/* <div className="tab-pane fade show " id="content-statistical" role="tabpanel" aria-labelledby="tab-bootstrap">
                            <Show_Statistical></Show_Statistical>
                         </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;