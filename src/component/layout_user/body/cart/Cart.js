import { Component } from "react";

import ItemCart from "./ItemCart";
import callApi from "./API";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "../../header/header";

export default class Cart extends Component {
  id = 0;
  update = [];
  cart = [];
  totalBill = 0;
  check = 0;

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      item: [],
      items: [],
      one_product: [],
      flat: false,
      discount: 0,
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.addCart = this.addCart.bind(this);
  }
  
  //lấy dữ liệu product
  componentWillMount() {
    this.id = this.props.match.params.id;

    if (this.id != 0) {
      this.addCart();
      console.log(this.id);
    } else {
      <img src="image/load.jpg" />;
    }
  }

  //Lấy dữ liệu mock giỏ hàng
  callData = async () => {
    await callApi(`/cart`, "GET", null).then((res) => {
      this.setState({
        items: res.data,
        flat: true,
      });
    });
    if (this.state.items != null) {
      await callApi(`/products`, "GET", null).then((res) => {
        this.setState({
          products: res.data,
        });
      });
    }

  };





  //Thêm sản phẩm
  async addCart() {
    await this.callData();
    this.state.items.map((item) => {
      if (this.id == item.id_product) {
        this.check = this.id;
        console.log(this.check);
      }
    });
    if (this.state.flat) {
      console.log(this.check);
      if (this.check == 0) {
        this.state.products.map((product) => {
          if (this.id == product.id) {
            this.cart = {
              id: product.id,
              id_product: product.id,
              name: product.name,
              price: product.price,
              type: product.type,
              image: product.image,
              quantity: 1,
              cost: product.price,
            }
            this.state.items.push(this.cart)
            this.setState({
              item: this.cart,
            });
            callApi(`/cart`, "POST", this.state.item).then((item) => { });
            console.log(this.state.items);
          }
        });
      } else {
        this.Plus(this.check);
      }
    }
  }




  //Xóa sản phẩm
  deleteProduct = (id_product) => {
    let id = 0;
    this.state.items.map((product) => {
      if (product.id_product == id_product) id = product.id;
    });
    console.log(id);
    callApi(`/cart/${id}`, "DELETE", null).then((product) => {
      this.setState({
        items: this.state.items.filter(
          (product, index) => product.id_product !== id_product
        ),
      });
    });
  };
  //Giam giá
  submitForm = (event) => {
    event.preventDefault();
    let coupon = document.getElementById("coupon").value;
    console.log(coupon);
    if (coupon == "GIAMGIA") {
      this.setState({
        discount: 10,
      });
    }
  };


  //Cập nhận dữ liệu giỏ hàng
  Minus = (id) => {
    this.state.items.map((itemUpdate) => {
      if (id == itemUpdate.id_product) {
        this.update = itemUpdate;
        if (this.update.quantity > 1) {
          this.update.quantity = this.update.quantity - 1;
          this.update.cost = this.update.quantity * this.update.price;
          this.setState({
            item: this.update,
          });
          callApi(`/cart/${itemUpdate.id}`, "PUT", this.state.item).then(
            (product) => { }
          );
        }
      }
    });
  };

  Plus = (id) => {
    this.state.items.map((itemUpdate) => {
      if (id == itemUpdate.id_product) {
        this.update = itemUpdate;
        if (this.update.quantity < 100) {
          this.update.quantity = this.update.quantity + 1;
          this.update.cost = this.update.quantity * this.update.price;
          this.setState({
            item: this.update,
          });
          callApi(`/cart/${itemUpdate.id}`, "PUT", this.state.item).then(
            (product) => { }
          );
        }
      }
    });
  };
  
  totalCost = () => {
    let total = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      total += parseInt(this.state.items[i].cost);
    }
    return total;
  };
  total = () => {
    let totalPrice = 0;
    if (this.state.discount == 0) {
      totalPrice = this.totalCost();
    } else {
      totalPrice = this.totalCost() - this.state.discount;
    }
    this.totalBill = totalPrice;
    localStorage.setItem("bill", JSON.stringify(this.totalBill));
    return totalPrice;
  };
  render() {
    const loading = this.state.flat;
    if (!loading) {
      return (
        <div>
          <h4>Loading...</h4>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <Header></Header>
        <br />
        <br />
        <br />
        <div className="row">
          <aside className="col-lg-12">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="text-uppercase">
                      <th scope="col" width={600}>
                        Product
                      </th>
                      <th scope="col" width={300}>
                        TYPE
                      </th>
                      <th scope="col" width={300}>
                        Unit price
                      </th>
                      <th scope="col" width={300}>
                        Quantity
                      </th>
                      <th scope="col" width={300}>
                        Cost
                      </th>
                      <th scope="col" className="text-right" width={100}>
                        Action
                      </th>
                    </tr>
                  </thead>
                </table>
                <div>
                  {console.log(this.state.items)}
                  {this.state.items.map((products, index) => (
                    <ItemCart
                      product={products}
                      delete={this.deleteProduct}
                      plus={this.Plus}
                      minus={this.Minus}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="col-lg-12" style={{ bottom: "0" }}>
            <div className="card-body">
              {/* Coupon */}
              <form onSubmit={(event) => this.submitForm(event)}>
                <div className="form-group">
                  <label>Have coupon?</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control coupon"
                      id="coupon"
                      placeholder="Coupon code"
                    />
                    <span className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill btn-apply coupon"
                      >
                        Apply
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                Shipping and additional costs are calculated based on values you
                have entered.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total Cost </strong>
                  <strong>{this.totalCost()} VND</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Discount</strong>
                  <strong>- {this.state.discount} VND</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">{this.total()} VND</h5>
                </li>
              </ul>
              <Link to={"/Payment"}>
                <button className="btn btn-primary rounded-pill py-2 btn-block ">
                  Buy now
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
