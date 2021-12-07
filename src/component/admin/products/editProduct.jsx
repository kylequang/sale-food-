import React, { Component } from 'react';
import callApi from '../../../callApi';


class EditProduct extends Component {
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
            products: [],
            temp: []

        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        callApi(`/products/${id}`, "GET", null).then((product) => {
            this.setState({
                id: product.data.id,
                name: product.data.name,
                image: product.data.image,
                price: product.data.price,
                price_sell: product.data.price_sell,
                description: product.data.description,
                type: product.data.type
            })
        })


        callApi(`/products`, 'GET', null).then((product) => {
            //Lấy dữ liệu từ api và gán cho mảng tempuser( mảng tạm lưu trữ)
            this.setState({
                temp: product.data

            })
            delete
                //Tiến hành xóa phần tử(loại bỏ product mình đang chỉnh sửa)
                this.setState({
                    temp: this.state.temp.filter(pro => pro.id != id), //loại bỏ p
                })
            console.log(this.state.temp)

            this.setState({
                products: this.state.temp
            });
        })
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




    update_product = () => {
        let nhanbiet = 0;
        this.state.products.map((item) => {
            if (item.name === this.state.name) {

            } else {
                nhanbiet++;
            }
        })


        if (nhanbiet == this.state.products.length) {
            let pr = {
                name: this.state.name,
                image: this.state.image,
                price: this.state.price,
                price_sell: this.state.price_sell,
                description: this.state.description,
                type: this.state.type
            }

            callApi(`/products/${this.state.id}`, 'PUT', pr).then((_pr) => {
                alert('Cập nhật thành công');
                this.props.history.push('/admin');
            });
        }
        else {
            alert("Tên Sản phẩm đã tồn tại!");
        }
    }



    onChangeEdit = (event) => {
        let nameofInput = event.target.name;
        let valueofInput = event.target.value;
        this.setState({ [nameofInput]: valueofInput })
    }




    render() {
        return (
            <div className="container-fluid">
                <div className="row text-info bg-dark" style={{ backgroundColor: 'red' }}>
                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                    <div className="col--lg-6 col-md-6 col-sm-6">
                        <h1 style={{ textAlign: 'center' }} >Edit Product</h1>
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
                            <input type="number" min='0' className="form-control" value={this.state.price}
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
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <input type="text" className="form-control" value={this.state.type}
                                onChange={(e) => this.setState({ type: e.target.value })} />
                        </div>








                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.update_product}>update</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-3'></div>
                </div>
            </div>
        );
    }
}

export default EditProduct;