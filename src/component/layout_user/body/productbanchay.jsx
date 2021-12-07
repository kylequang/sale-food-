import React, { Component } from "react";
import callApi from "../../../callApi";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Productbanchay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
        };
    }
    componentDidMount = async () => {
        await callApi(`/products`, "GET", null).then((product) => {
            this.setState({
                loading: true,
                products: product.data,
            });
        });
    };

    render() {
        const loading = this.state.loading;
        if (!loading) {
            return (
                <div>
                    <h4>Loading...</h4>
                </div>
            );
        }
        //tồn tại user->Đăng nhập thành công
        if (localStorage.getItem("user") != null) {
            return (
                <div className="container" id="spbc">
                    <marquee>
                        {" "}
                        <h3 style={{ color: "white", marginTop: "10px" }}>
                            Sản phẩm bán chạy
                        </h3>{" "}
                    </marquee>
                    <hr></hr>
                    <div className="row">
                        {this.state.products.map((product, index) => {
                            if (product.type == "banchay") {
                                if (product.status == "hết hàng") {
                                    return (
                                        <div className="col-lg-3 col-md-3 col-sm-">
                                            <div className="card" id="img_card">
                                                <img
                                                    className="card-img-top"
                                                    style={{
                                                        height: "180px",
                                                        borderRadius: "20px",
                                                    }}
                                                    src={product.image}
                                                    alt="món ăn nổi bật"
                                                />
                                                <div className="card-body">
                                                    <h5>{product.name}</h5>
                                                    <strong
                                                        style={{
                                                            color: "black",
                                                        }}
                                                    >
                                                        {product.price} VND
                                                    </strong>
                                                    <h6
                                                        style={{ color: "red" }}
                                                    >
                                                        {product.status} (hãy
                                                        đợi)
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="col-lg-3 col-md-3 col-sm-">
                                            <div className="card" id="img_card">
                                                <img
                                                    className="card-img-top"
                                                    style={{
                                                        height: "180px",
                                                        borderRadius: "20px",
                                                    }}
                                                    src={product.image}
                                                    alt="món ăn nổi bật"
                                                />
                                                <div className="card-body">
                                                    <h5>{product.name}</h5>
                                                    <strong
                                                        style={{ color: "red" }}
                                                    >
                                                        {product.price} VND
                                                    </strong>
                                                    <h6>{product.status}</h6>
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-5 col-sm-5">
                                                            <Link
                                                                to={`/Cart/${product.id}`}
                                                            >
                                                                <button class="custom-btn btn-add-product">
                                                                    <span>
                                                                        Add!
                                                                    </span>
                                                                    <span>
                                                                        Mua ngay
                                                                    </span>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                        <div className="col-lg-2 col-sm-2 col-md-2"></div>
                                                        <div className="col-lg-5 col-md-5 col-sm-5">
                                                            <Link
                                                                to={`/detail/${product.id}`}
                                                            >
                                                                <button class="custom-btn btn-detail-product">
                                                                    Detail
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            }
                        })}
                    </div>
                </div>
            );
        } else {
            //Ngược lại chưa đăng nhập
            return (
                <div className="container" id="spbc">
                    <marquee>
                        {" "}
                        <h3 style={{ color: "white", marginTop: "10px" }}>
                            Sản phẩm bán chạy
                        </h3>{" "}
                    </marquee>
                    <hr></hr>
                    <div className="row">
                        {this.state.products.map((product, index) => {
                            if (product.type == "banchay") {
                                return (
                                    <div className="col-lg-3 col-md-3 col-sm-">
                                        <div className="card" id="img_card">
                                            <img
                                                className="card-img-top"
                                                style={{
                                                    height: "180px",
                                                    borderRadius: "20px",
                                                }}
                                                src={product.image}
                                                alt="món ăn nổi bật"
                                            />
                                            <div className="card-body">
                                                <h5>{product.name}</h5>
                                                <strong
                                                    style={{ color: "red" }}
                                                >
                                                    {product.price} VND
                                                </strong>
                                                <h6>{product.status}</h6>
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-5 col-sm-5">
                                                        <button
                                                            class="custom-btn btn-add-product"
                                                            type="button"
                                                            onClick={() =>
                                                                alert(
                                                                    "Bạn chưa đăng nhập"
                                                                )
                                                            }
                                                        >
                                                            <span>Add!</span>
                                                            <span>
                                                                Mua ngay
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="col-lg-2 col-sm-2 col-md-2"></div>
                                                    <div className="col-lg-5 col-md-5 col-sm-5">
                                                        <Link
                                                            to={`/detail/${product.id}`}
                                                        >
                                                            <button class="custom-btn btn-detail-product">
                                                                Detail
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default Productbanchay;
