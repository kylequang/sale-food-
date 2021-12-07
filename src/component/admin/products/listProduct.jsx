import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import SearchProduct from './SearchProduct';

import { CommonLoading } from 'react-loadingg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import callApi from '../../../callApi';



export class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            _Products: [],
            // status1: true,
            // status2: false,
        }
    }

    componentDidMount() {
        callApi(`/products`, 'GET', null).then(products => {
            this.setState({
                loading: true,
                _Products: products.data
            })
        });
    }

    //xóa product
    delete_User = (id) => {
        callApi(`/products/${id}`, 'DELETE', null).then((product) => {
            this.setState({
                _Products: this.state._Products.filter(product => product.id != id)
            })
            alert("Xóa thành công");
        })
    }


    render() {
        const { loading, _Products } = this.state;

        if (!loading) {
            return (
            <CommonLoading />
            )
        }
        return (
            <div className="container-fluid " >
                <div>
                    <SearchProduct></SearchProduct>
                </div>
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <table style={{ border: '1px solid red' }} className="table table-hover" >
                            <thead style={{ border: '1px solid red' }}>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Price_sell</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Status(Còn Hàng)</th>
                                    <th>Edit</th>
                                    <th>Delete</th>


                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid red' }}>
                                {
                                    _Products.map((_product, index) => (

                                        <tr key={index} >
                                            <td>

                                                <button className='btn btn-outline-danger'>
                                                    {_product.id}
                                                </button>

                                            </td>
                                            <td>{_product.name}</td>
                                            <td><img src={_product.image} style={{ width: '70px', height: '50px' }} /></td>
                                            <td>{_product.price}</td>
                                            <td>{_product.price_sell}</td>
                                            <td>{_product.description}</td>
                                            <td>{_product.type}</td>

                                            <td >
                                                <BootstrapSwitchButton
                                                    onChange={() => {

                                                        if (_product.checkstatus == true) {
                                                            let product = {
                                                                status: "hết hàng",
                                                                checkstatus: !_product.checkstatus
                                                            }
                                                            callApi(`/products/${_product.id}`, "PUT", product).then((product) => {
                                                                alert('Cập nhật thành công');
                                                                window.location.reload();
                                                                this.props.history.push('/admin');
                                                            })
                                                        } else {
                                                            let product = {
                                                                status: "còn hàng",
                                                                checkstatus: !_product.checkstatus
                                                            }
                                                            callApi(`/products/${_product.id}`, "PUT", product).then((product) => {
                                                                alert('Cập nhật thành công');
                                                                // window.location.reload();
                                                            })
                                                        }
                                                    }
                                                    }
                                                    checked={_product.checkstatus}
                                                    onstyle="warning" />
                                            </td>




                                            <td>
                                                <Link to={`/edit_product/${_product.id}`}>
                                                    <span className="badge badge-warning text-white">edit</span>
                                                </Link>
                                            </td>

                                            <td><button type='submit' className="badge badge-danger" onClick={() => this.delete_User(_product.id)}>remove</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProducts;
