import React, { Component } from 'react';
import { BoxLoading, CommonLoading } from 'react-loadingg';
import callJson from '../../../../../callJson';
class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [],
            status: "",
            one_order_again: [], //lưu trữ order_again
            coppy_one_order_again: [],
            reversedItems: []//Chuyển đổi mảng
        };
    }
    componentDidMount = async () => {
        await callJson(`order`, 'GET', null).then(orders => {
            this.setState({
                loading: true,
                items: orders.data
            });
        });
    }
   


    OrderAgain = async (id) => {
        if(window.confirm("Bạn có muốn đặt lại đơn hàng này")==true){
            await callJson(`order/${id}`, "GET", null).then(or => {
                this.setState({
                    one_order_again: or.data
                })
            });
            console.log(this.state.one_order_again);
            this.PutOrder(id);
        }
        
    }

    PutOrder=(id)=>{
        for (let i in this.state.one_order_again){
            if(this.state.one_order_again[i]===id){
                delete this.state.one_order_again[i]; //xóa obj  id
            }
        }
        console.log(this.state.one_order_again);
        this.state.one_order_again.status="Chờ xác nhận";
        console.log(this.state.one_order_again);
        callJson(`order`,"POST",this.state.one_order_again).then(or=>{
            alert("Bạn đặt hàng thành công! Vui lòng đợi");
            window.location.reload();
        })
        
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
                    this.state.reversedItems = this.state.items.map(item => item).reverse(),
                    this.state.reversedItems.map((order, index) => {

                        if (order.status == 'Đã Giao' && order.user[0] == JSON.parse(localStorage.getItem('user'))) {
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
                                                    <button onClick={() => this.OrderAgain(order.id)} className="btn btn-outline-success">Đặt lại</button>
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
export default Delivery;