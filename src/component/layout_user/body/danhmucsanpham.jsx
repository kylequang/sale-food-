import React, { Component } from 'react';
import Milktea from './typeproduct/milktea';
import Cake from './typeproduct/cake';
import Fastfood from './typeproduct/fastfood';

class Danhmucsanpham extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid' id='danhmucsanpham'  >
                    <h4>List Menu</h4>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <ul className="nav nav-tabs flex-column flex-sm-row" id="tabdanhmucsanpham" role="tablist">
                                <li className="nav-item col-lg-4 col-md-4 col-sm-4">
                                    <a className="nav-link active " id="tab-milktea" data-toggle="tab" href="#milk-tea" role="tab" aria-controls="content-milktea" aria-selected="false">
                                        Milk_Tea
                                    </a>
                                </li>

                                <li className="nav-item col-lg-4 col-md-4 col-sm-4">
                                    <a className="nav-link" id="tab-cake" data-toggle="tab" href="#content-cake" role="tab" aria-controls="content-cake" aria-selected="false">
                                        Cake
                                    </a>
                                </li>
                                <li className="nav-item col-lg-4 col-md-4 col-sm-4">
                                    <a className="nav-link " id="tab-fastfood" data-toggle="tab" href="#content-fastfood" role="tab" aria-controls="content-bootstrap" aria-selected="true">
                                        Fast_Food
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-4'>
                        </div>
                    </div>

                    <div>
                        <div className="tab-content" id="conten_dmsp">
                            <div className="tab-pane fade show active" id="milk-tea" role="tabpanel" aria-labelledby="tab-milktea">
                                <Milktea></Milktea>
                            </div>
                            <div className="tab-pane fade" id="content-cake" role="tabpanel" aria-labelledby="tab-cake">
                                <Cake></Cake>
                            </div>
                            <div className="tab-pane fade  " id="content-fastfood" role="tabpanel" aria-labelledby="tab-fastfood">
                                <Fastfood></Fastfood>
                            </div>

                        </div>
                    </div>

                    <div className='row'>

                    </div>



                </div>

            </div>


        );
    }
}

export default Danhmucsanpham;