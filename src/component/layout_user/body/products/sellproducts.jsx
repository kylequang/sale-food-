import React, { Component } from 'react';
import callApi from '../../../../callApi';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Sellproducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount = async () => {
        await callApi(`/products`, "GET", null).then((product) => {
            this.setState({
                products: product.data
            })
        })
    }
    render() {
        if (localStorage.getItem("user") != null) {
            return (
                <div className="container-fluid">
                    <h3  style={{color:"Red"}}> <marquee width="30%">Sản phẩm đang được khuyến mãi</marquee> </h3>

                    <div className='row'>
                        {
                            this.state.products.map((product) => {
                                if (product.price_sell != '' && product.price_sell > 0 && product.status == "còn hàng") {
                                    return (
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <div className="card" id='img_card' >
                                                <img className="card-img-top" style={{ height: '120px', width: '100%', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                <div className="card-body">
                                                    <h6 >{product.name}</h6>
                                                    <strong style={{ color: 'red' }}>{product.price_sell} VND</strong>
                                                    <br></br>
                                                    <del>{product.price} vnd</del>
                                                    <h6>{product.status}</h6>
                                                    <div className='row'>
                                                        <Link to={`/giohang/${product.id}`}>
                                                            <button class="custom-btn btn-add-product"><span>Add!</span><span>Mua ngay</span></button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-fluid" >
                    <h3>Sản phẩm đang được khuyến mãi</h3>
                    <br></br>
                    <div className='row'>
                        {
                            this.state.products.map((product) => {
                                if (product.price_sell != '' && product.price_sell > 0 && product.status == "còn hàng") {
                                    return (
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <div className="card" id='img_card' >
                                                <img className="card-img-top" style={{ height: '120px', width: '100%', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                <div className="card-body">
                                                    <h5 >{product.name}</h5>
                                                    <strong style={{ color: 'red' }}>{product.price_sell} VND</strong>
                                                    <br></br>
                                                    <del>{product.price} vnd</del>
                                                    <h6>{product.status}</h6>
                                                    <div className='row'>

                                                        <button onClick={() => { alert("Bạn chưa đăng nhập") }} class="custom-btn btn-add-product"><span>Add!</span><span>Mua ngay</span></button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (null)
                                }
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Sellproducts;