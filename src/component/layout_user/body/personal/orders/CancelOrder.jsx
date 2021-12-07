import React, { Component } from 'react';
import { BoxLoading, CommonLoading } from 'react-loadingg';
import callJson from '../../../../../callJson';
class CancelOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [],
            status: "",
            one_order: [],
        };
    }
    componentDidMount = async () => {
        await callJson(`order`, 'GET', null).then(orders => {
            this.setState({
                loading: true,
                items: orders.data
            });
            console.log(orders.data)
        });
    }

    orderAgain=(id)=>{
        alert(id)
    }
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

                        if (order.status == 'Hủy Đơn' && order.user[0] == JSON.parse(localStorage.getItem('user'))) {
                            return (
                                <div className='container'>
                                    <h5>Đơn hàng : {order.id}</h5>
                                    <table class="table" style={{ backgroundColor: " #adad85" }} >
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
                                            <tr style={{backgroundColor:"#cc9900"}}>
                                                <td>Tài khoản</td>
                                                <td scope="col">Ngày đặt</td>
                                                <td>Địa chỉ giao</td>
                                                <td> Tổng tiền</td>
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
                                                <td class="btn btn-dark">
                                                    Đơn Hàng Bị Hủy
                                            </td>
                                                <td >
                                                   <button onClick={()=>this.orderAgain(order.id)} class="btn btn-outline-warning">Đặt Lại</button> 
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
export default CancelOrder;