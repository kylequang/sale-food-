import React, { Component } from 'react';
import EditProduct from './editProduct';
import ListProducts from './listProduct';
import AddProduct from './addProduct';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
class ShowProduct extends Component {
    render() {
        return (
            <Router>
                <br></br>
                <div className="container-fluid "  >
                    <div className='row' style={{ border: '1px solid red' }}>
                        <div className='row' style={{ marginTop: '10px', marginBottom: '10px',marginLeft:'10px' }}>
                            <div className='nav-item '>
                                <span className='nav-link active'>
                                    <Link to="/admin">List_Products </Link>
                                </span>
                            </div>
                            <div className='nav-item'>
                                <span className='nav-link'>
                                    <Link to="/add_product">Add Product</Link>
                                </span>
                            </div>        
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/admin" exact component={ListProducts} />
                    <Route path="/edit_product/:id?" component={EditProduct} />
                    <Route path="/add_product" exact component={AddProduct} />
                </Switch>
            </Router>
        );
    }
}

export default ShowProduct;