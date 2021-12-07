import React, { Component } from 'react';

class Search extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            itemSearch:[]
        }
    }



    render() {
        return (   
            <div className='row'>
                {
                    this.state.itemSearch.map((product) => {
                        return (
                            <div className='col-lg-4 col-md-4 col-sm-4'>
                                <div className="card" id='img_card' >
                                    <img className="card-img-top" style={{ height: '180px', borderRadius: '20px' }} src={product.image} alt="sản phẩm được tìm kiếm" />
                                    <div className="card-body">
                                        <h5 >{product.name}</h5>
                                        <strong style={{ color: 'red' }}>{product.price} VND</strong>
                                        <h6>{product.status}</h6>
                                        <div className='row'>
                                            <div className='col-lg-5 col-md-5 col-sm-5'>
                                                <Link to={`/Cart/${product.id}`}>
                                                    <button class="custom-btn btn-add-product"><span>Add!</span><span>Mua ngay</span></button>
                                                </Link>
                                            </div>
                                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                            </div>
                                            <div className='col-lg-5 col-md-5 col-sm-5'>
                                                <Link to={`/detail/${product.id}`}>
                                                    <button class="custom-btn btn-detail-product">Detail</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default Search;