import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "./API";

export default class Payment extends Component {
  bill = 0;
  user = "";
  date = "";
  order = [];
  constructor(props) {
    super(props);
    this.state = {
      payment: [],
      name: "",
      address: "",
      phone: ""
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
  }

  componentWillMount() {
    this.callData();
    this.bill = JSON.parse(localStorage.getItem("bill"));
    this.user = JSON.parse(localStorage.getItem("user"));
    let today = new Date();
    this.date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  }

  callData = async () => {

    await callApi(`/cart`, "GET", null).then((res) => {
      this.setState({
        payment: res.data,
      });
    });
  }




  handleChangeId(event) {
    this.setState({});
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeAdd(event) {
    this.setState({ address: event.target.value });
  }
  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }
  handleSubmitForm(event) {
    let order =
    {
      user: this.user,
      nameUser: this.state.name,
      create: this.date,
      totalOrder: this.bill,
      address: this.state.address,
      phone: this.state.phone,
      listItem: this.state.payment,
      status: "Chờ xác nhận",
      check: true,
    }
    axios.post("http://localhost:3000/Order", order).then((order) => {
      alert("OKi complete");
        this.props.history.push('/');    
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="bodyPayment">
        
        <div className="cardPayment">
          
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="left border">
                  <form className="formPayment">
                    <p1>Name:</p1>
                    <input className="input" id="name" onChange={this.handleChangeName} />
                    <p1>Phone Number:</p1>
                    <input className="input" id="phone" onChange={this.handleChangePhone} />
                    <p1>Address:</p1>
                    <input className="input" id="address" onChange={this.handleChangeAdd} />
                    <p1>Lời nhắn: </p1>
                    <input className="input" id="mess" />
                    <div className="row">
                      <p1>Vận chuyển:</p1>
                      <select>
                        <option value="10000">JT Express</option>
                        <option value="15000">Viettel Post</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right border">
                  <div className="header">Order Summary</div>
                  <div className="row item">
                    {this.state.payment.map((itemPay, index) => (
                      <div className="col-12 align-self-center">
                        <img className="img-fluid" src="" />
                        <div className="col-8">
                          <div className="row">
                            <b>{itemPay.cost} VND</b>
                          </div>
                          <div className="row text-muted">{itemPay.name}</div>
                          <div className="row">
                            Quantity : {itemPay.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr />
                  <form onSubmit={(event) => this.handleSubmitForm(event)} >
                    <div className="row lower">
                      <div className="col text-left">Subtotal</div>
                      <div className="col text-right">{this.bill} VND</div>
                    </div>
                    <div className="row lower">
                      <div className="col text-left">Delivery</div>
                      <div className="col text-right">Free</div>
                    </div>
                    <div className="row lower">
                      <div className="col text-left">
                        <b>Total to pay</b>
                      </div>
                      <div className="col text-right">
                        <b>{this.bill} </b>
                      </div>
                    </div>
                    <div className="row lower">
                      <div className="col text-left"></div>
                    </div>
                    <button type="submit" id="payment" className="btnPayment">
                      ORDER NOW
                    </button>
                  </form>
                  <p className="text-muted text-center">
                    Complimentary Shipping &amp; Returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
