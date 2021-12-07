import React, { Component } from 'react';
import Header from '../../header/header';
import Comment from '../products/comment';
import callApi from '../../../../callApi';

class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            products: []
        }
    }


    componentDidMount=async()=> {
        // const id = (window.location.pathname).split('/')[2]
        let id = this.props.match.params.id;
      await  callApi(`/products/${id}`, 'GET', null).then((p) => {
            this.setState({
                products: p.data
            })

        })
    }
    muangay=()=>{
      
            alert("Bạn Chưa Đăng Nhập")
        
    }
    render() {
        return (
            <div className='container-fluid'>
                <Header></Header>

                <div className="card-header">
                    <h2>CHI TIẾT SẢN PHẨM</h2>
                </div>

                <hr className="my" />
                <div className="shop-detail-box-main" style={{ width: '100%', marginTop: 25 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="carousel-example-1" className="single-items-slider carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active"><img className="d-block w-100" src={"/" + this.state.products.image} alt="First slide" /> </div>
                                        <div className="carousel-item"> <img className="d-block w-100" src={"/" + this.state.products.image} alt="Second slide" /> </div>
                                        <div className="carousel-item"> <img className="d-block w-100" src={"/" + this.state.products.image} alt="Third slide" /> </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                                        <i className="fa fa-angle-left" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                                        <i className="fa fa-angle-right" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-example-1" data-slide-to={0} className="active">
                                            <img className="d-block w-100 img-fluid" src={"/" + this.state.products.image} alt />
                                        </li>
                                        <li data-target="#carousel-example-1" data-slide-to={1}>
                                            <img className="d-block w-100 img-fluid" src={"/" + this.state.products.image} alt />
                                        </li>
                                        <li data-target="#carousel-example-1" data-slide-to={2}>
                                            <img className="d-block w-100 img-fluid" src={"/" + this.state.products.image} alt />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-items-details">
                                    <form >
                                        <br />
                                        <h4><b>TÊN MÓN ĂN:</b></h4><h2 style={{ color: 'red' }}>{this.state.products.name}</h2>


                                        <br />
                                        <h3><b>GIÁ SẢN PHẨM :</b> <span>{this.state.products.price}VND</span></h3>
                                        <br />
                                        <h3><b>TRẠNG THÁI :</b> <span>{this.state.products.status}</span></h3>
                                        <p />
                                        <br />
                                        <h3><b>CHI TIẾT SẢN PHẨM :</b>
                                            <span>{this.state.products.description}</span></h3>
                                        <br />
                                        <label className="control-label"><h3><b>SỐ LƯỢNG MUA</b></h3></label>
                                        <input className="form-control" defaultValue={1} min={1} max={5} name="quantity" type="number" />
                                        <input type="hidden" name="id" />
                                        <br />
                                        <div className="price-box-bar">
                                            <div className="cart-and-bay-btn">
                                                <button className="btn btn-primary" onClick={this.muangay} type="submit">Mua ngay</button>
                                            </div>
                                            <br />
                                            <style dangerouslySetInnerHTML={{ __html: "\n                                        #button {\n                                            background-color: white;\n                                            color: black;\n                                            border: 2px solid #555555;\n                                        }\n\n                                        #button:hover {\n                                            background-color: #e7e7e7;\n                                        }\n                                    " }} />
                                        </div></form>
                                    <div className="add-to-btn">
                                        <div className="add-comp">
                                            <a className="btn hvr-hover" id="button" href="#"><i className="fa fa-heart-o" style={{ fontSize: 18, color: 'red' }} />
                         Yêu thích</a>
                                            <a className="btn hvr-hover" id="button" href="#"><i className="fa fa-sync" /> So sánh</a>
                                        </div>
                                        <div className="share-bar">
                                            <a className="btn hvr-hover" href="#"><i className="fa fa-facebook-square" style={{ fontSize: 36, color: "blue" }} /></a>
                                            <a className="btn hvr-hover" href="#"><i className="fa fa-google-plus" style={{ fontSize: 36, color: "#d54d41" }} aria-hidden="true" /></a>
                                            <a className="btn hvr-hover" href="#"><i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: 36, color: "#00b6f1" }} /></a>
                                            <a className="btn hvr-hover" href="#"><i className="fa fa-pinterest-p" aria-hidden="true" style={{ fontSize: 36, color: "#df0022" }} /></a>
                                            <a className="btn hvr-hover" href="#"><i className="fa fa-whatsapp" aria-hidden="true" style={{ fontSize: 36, color: "rgb(65 175 62)" }} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Comment></Comment>
                        {/* <Example/> */}
                    </div>
                    <hr className="my" />
                </div>




            </div>
        );
    }
}

export default DetailProduct;