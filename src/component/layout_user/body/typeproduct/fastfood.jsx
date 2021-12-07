import React, { Component } from 'react';
import callApi from '../../../../callApi'

class Fastfood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            products: []
        }
    }
    componentDidMount = async()=> {
      await callApi(`/products`, 'GET', null).then((product) => {
            console.log(product.data);
            this.setState({
                loading: true,
                products: product.data
            })
        })     
    }
    


    render() {
        const loading = this.state.loading;
        if (!loading) {
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            )
        }
        if (localStorage.getItem("user") != null) {
            return (
                <div className="container" id='milktea'>
                    <hr></hr>
                    <div className="row">
                        {
                            this.state.products.map((product, index) => {
                                if (product.type == "fastfood") {
                                    if (product.status == 'còn hàng') {
                                        return (
                                            <div className='col-lg-3 col-md-3 col-sm-'>
                                                <div className="card" id='img_milktea' >
                                                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                    <div className="card-body">
                                                        <h5 >{product.name}</h5>
                                                        <strong style={{ color: 'red' }}>{product.price} VND</strong>
                                                        <h6>{product.status}</h6>

                                                    </div>
                                                    <button type="button" class="btn btn-primary">Mua Ngay</button>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='col-lg-3 col-md-3 col-sm-'>
                                                <div className="card" id='img_milktea' >
                                                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                    <div className="card-body">
                                                        <h5 >{product.name}</h5>
                                                        <strong style={{ color: 'red' }}>{product.price} VND</strong>
                                                        <h6>{product.status}</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            }
                            )
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container" id='milktea'>
                    <hr></hr>
                    <div className="row">
                        {
                            this.state.products.map((product, index) => {
                                if (product.type == "fastfood") {
                                    if (product.status == 'còn hàng') {
                                        return (
                                            <div className='col-lg-3 col-md-3 col-sm-'>
                                                <div className="card" id='img_milktea' >
                                                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                    <div className="card-body">
                                                        <h5 >{product.name}</h5>
                                                        <strong style={{ color: 'red' }}>{product.price} VND</strong>
                                                        <h6>{product.status}</h6>

                                                    </div>
                                                    <button type="button" onClick={() => { alert("Bạn chưa đăng nhập") }} class="btn btn-primary">Mua Ngay</button>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='col-lg-3 col-md-3 col-sm-'>
                                                <div className="card" id='img_milktea' >
                                                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="món ăn nổi bật" />
                                                    <div className="card-body">
                                                        <h5 >{product.name}</h5>
                                                        <strong style={{ color: 'red' }}>{product.price} VND</strong>
                                                        <h6>{product.status}</h6>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            }
                            )
                        }
                    </div>
                </div>
            );
        }

    }
}

export default Fastfood;