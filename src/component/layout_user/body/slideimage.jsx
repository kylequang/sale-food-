import React, { Component } from 'react';

class Slideimage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" style={{height:'645px'}} src="images/slide/img1.jpg" alt="First slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Welcome to us Website</h5>
                                    <p>As long as you like it - delicious food is available </p>
                                    <span>Chỉ cần bạn thích - món ngon có sẵn</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" style={{ height: '645px' }} src="images/slide/img2.jpg" alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 >Welcome to us Website</h5>
                                    
                                    <p>Love is just a grain of sand, because food has overwhelmed love.</p>
                                    <span>Tình yêu chỉ là một hạt cát, vì thức ăn đã lấn át tình yêu.</span>
                                </div>
                                
                            </div>
                            <div className="carousel-item">           
                                <img className="d-block w-100" style={{ height: '645px' }} src="images/slide/img3.jpg" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 >Welcome to us Website</h5>
                                    <p> " Money is first, food is second, because without money, there is no food ".</p>
                                    <span>Tiền là thứ nhất, thức ăn là thứ hai, bởi vì không có tiền, sẽ không có thức ăn.</span>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Slideimage;