import React, { Component } from 'react';
import axios from 'axios';
import callApi from '../../../../callApi';

var count = 0;
class Comment extends Component {


    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            id: '',
            sort: true,
            number: '',
            content: '',
            comment: [],
            count: ''
        }
    }
    componentDidMount() {
        const id = (window.location.pathname).split('/')[2]
        this.setState({
            id: id
        })

        callApi(`/comments`, 'GET', null).then((res) => {
            this.setState({
                loading: true,
                comment: res.data
            });
            console.log(this.state.comment);
            let counts = 0;

            this.state.comment.map(com => {
                if (com.id_products == id) {
                    counts++;
                }
            });
            this.setState({
                count: counts
            })
        })      
    }
    getUser = () => {
        var user = JSON.parse(localStorage.getItem('user'));
        return user[0];
    }

    postComment = () => {

        let today = new Date();
        let comment = {
            account_user: this.getUser(),
            id_products: this.state.id,
            contents: this.state.content,
            time: today.getHours() + "h:" + today.getMinutes() + "m:" + today.getSeconds() + 's , ngày ' + today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()
        }
        callApi(`/comments`, "POST", comment).then((comment) => {

            window.location.reload();
        })
    }





    render() {

        if (localStorage.getItem('user') != null) {
            return (
                <div>
                    <div className="card card-outline-secondary my-4">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="card-header">
                                    <h2>Đánh giá sản phẩm</h2>
                                    <div className="ratting">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="reviews-submit">

                                    <div className="form-group">
                                        <label>Bình luận :</label>
                                        <textarea className="form-control" rows={3} name="content" onChange={(e) => {
                                            this.setState({
                                                content: e.target.value
                                            })
                                        }} />

                                    </div>
                                    <div className="cart-and-bay-btn">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={this.postComment}
                                        >
                                            Bình luận
                                     </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"> </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h5>Người dùng bình luận( <span>{ } {this.state.count} </span> )</h5>
                                {
                                    this.state.comment.map((comment) => {
                                        if (comment.id_products == this.state.id) {

                                            return (
                                                <div className='row'>
                                                    <tr>
                                                        <td ><span style={{ marginLeft: "10px" }}>{comment.account_user}: </span></td>
                                                        <td > <span style={{ color: 'red', marginLeft: "10px" }}>{comment.contents} </span></td>
                                                        <td ><span style={{ marginLeft: "10px" }}>  vào lúc {comment.time}</span></td>
                                                    </tr>
                                                    {/* <span>{comment.account_user}: </span>
                                                <span style={{color:'red'}}>{comment.contents} </span> 
                                                <span>  vào lúc {comment.time}</span> */}
                                                    <hr style={{ backgroundColor: "black" }}></hr>
                                                </div>

                                            )

                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="card card-outline-secondary my-4">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="card-header">
                                    <h2>Đánh giá sản phẩm</h2>
                                    <div className="ratting">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                                <div className="reviews-submit">

                                    <div className="form-group">
                                        <label>Bình luận :</label>
                                        <textarea className="form-control" rows={3} name="content" onChange={(e) => {
                                            this.setState({
                                                content: e.target.value
                                            })
                                        }} />

                                    </div>
                                    <div className="cart-and-bay-btn">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={() => { alert("Bạn chưa đăng nhập") }}
                                        >
                                            Bình luận
                                     </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"> </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h5>Người dùng bình luận<span> </span> </h5>
                                {
                                    this.state.comment.map((comment) => {
                                        if (comment.id_products == this.state.id) {
                                            return (
                                                <div className='row'>
                                                    <span>{comment.account_user}: </span>
                                                    <span style={{ color: 'red' }}>{comment.contents}</span>
                                                    <span> vào lúc{comment.time}</span>
                                                    <hr></hr>
                                                </div>

                                            )

                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default Comment;