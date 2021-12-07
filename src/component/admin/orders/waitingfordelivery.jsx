import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { BoxLoading, CommonLoading } from 'react-loadingg';

import callJson from '../../../callJson';



class Waitingfordelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [],
            status: "",
            one_order: [],

        };
    }
    componentDidMount=async()=> {
      await  callJson(`order`, 'GET', null).then(orders => {
            this.setState({
                loading: true,
                items: orders.data
            });
            console.log(orders.data)
        });
    }
    changeStatusOrder = (id) => {  
        callJson(`order/${id}`, 'GET', null).then(one_order => {
            this.setState({
                order: one_order.data
            });
            console.log(this.state.order);
            this.state.order.status = "Đã Giao";
            this.state.order.check=false;
            console.log(this.state.order);
            callJson(`order/${id}`,"PUT",this.state.order).then((order)=>{
                alert("Giao hàng thành công!");
                window.location.reload();
                <BoxLoading />
            })
        });

    };
    render() {
        const loading = this.state.loading;
        if (!loading) {
            return (
                <div>
                    <h4>Loading...</h4>
                    <BoxLoading />
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <br></br>
                <h4>Thông tin Đơn Hàng</h4>
                {
                    this.state.items.map((order, index) => {

                        if (order.status == 'Chờ Giao Hàng') {
                            return (
                                <div className='container'>
                                    <h5>Đơn hàng : {order.id}</h5>
                                    <table class="table" >
                                        <thead>
                                            <tr>
                                                <td>Product_name</td>
                                                <td>Price</td>
                                                <td>Quantity</td>
                                                <td>Total</td>

                                                <td>Image</td>
                                            </tr>
                                        </thead>
                                        {/* Danh sách sản phẩm */}
                                        {
                                            order.listItem.map((item) => (
                                                <tr>
                                                    <td> {item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.cost}</td>

                                                    <td><img src={item.image} style={{ height: '60px', width: '100px' }} /></td>

                                                </tr>

                                            ))
                                        }
                                        
                                        <tbody style={{ borderColor: "red" }}>
                                            <tr>
                                                <td scope="col">Account_User</td>
                                                <td scope="col">Create_day_order</td>

                                                <td>Address</td>
                                                <td> Total</td>
                                            </tr>
                                            <tr>
                                                <td>{order.user}</td>
                                                <td>{order.create}</td>


                                                <td>{order.address}</td>
                                                <td>{order.totalOrder}</td>
                                            </tr>
                                        </tbody> 
                                        <tfoot>
                                        <tr>
                                            <td class="btn-success">
                                                {order.status}
                                            </td>
                                            <td>
                                                <button onClick={()=>this.changeStatusOrder(order.id)} class="btn btn-outline-success">Đã Giao</button>
                                            </td>
                                        </tr>
                                        </tfoot>   
                                    </table>
                                    <br></br>
                                    <hr style={{ backgroundColor: "red" }}></hr>
                                </div>
                            )
                        }
                        
                      
                    })
                }
            </div>
        );
    }
}
export default Waitingfordelivery;