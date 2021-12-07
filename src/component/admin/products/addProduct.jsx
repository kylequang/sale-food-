import React, { Component } from 'react';
import callApi from '../../../callApi';

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            image: '',
            price: '',
            price_sell: '',
            description: '',
            type: '',
            status: "còn hàng",
            checkstatus: true,
            products: [],
        }
        this.onImageChange = this.onImageChange.bind(this);
    }
    componentDidMount() {
        callApi(`/products`, 'GET', null).then((products) => {
            this.setState({
                products: products.data
            })
        })
    }
    add_product = () => {
        let product = {
            name: this.state.name,
            price: this.state.price,
            price_sell: this.state.price_sell,
            image: this.state.image,
            description: this.state.description,
            type: this.state.type,
            status: this.state.status,
            checkstatus: this.state.checkstatus
        };

        alert(this.state.image);
        if (this.checkAddProduct(product) == 0) {
            callApi(`/products`, 'post', product).then((product) => {
                alert('Thêm thành công');
                this.props.history.push('/admin');
            });
        } else {
            alert("Thông tin đã tồn tại! Vui lòng kiểm tra lại")
        }
    }

    checkAddProduct = (product) => {
        let nhanbiet = 0;
        this.state.products.map((pro) => {
            if (pro.name === product.name) {
                nhanbiet++;
            }
        })
        return nhanbiet;
    }

    
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        } else {
            alert("Không được")
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row text-info bg-dark" style={{ backgroundColor: 'red' }}>
                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                    <div className="col--lg-6 col-md-6 col-sm-6">
                        <h1 style={{ textAlign: 'center' }} >Add Product</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input onChange={this.onImageChange} type="file" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" min='1000' className="form-control" value={this.state.price}
                                onChange={(e) => this.setState({ price: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Price_Sell</label>
                            <input type="number" min='1000' className="form-control" value={this.state.price_sell}
                                onChange={(e) => this.setState({ price_sell: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" value={this.state.description}
                                onChange={(e) => this.setState({ description: e.target.value })} />
                        </div>
                        <div className="form-group">
                           
                            <input type="radio" value="milktea" name="type" 
                             onChange={(e) => this.setState({ type: e.target.value })} /> Milk_tea 
                            <input type="radio" value="cake" name="type" 
                             onChange={(e) => this.setState({ type: e.target.value })} /> Cake 
                            <input type="radio" value="fastfood" name="type"  
                            onChange={(e) => this.setState({ type: e.target.value })} /> Fastfood 
                            {/* <input type="text" className="form-control" value={this.state.type}
                                onChange={(e) => this.setState({ type: e.target.value })} /> */}
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.add_product}>ADD</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                </div>
            </div>
        )
    }
}
