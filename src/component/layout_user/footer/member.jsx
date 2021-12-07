import React, { Component } from 'react';

class Member extends Component {
    render() {
        return (
            <div className='container-fluid' >
                <div className='row' id='member'>
                    <div className='col-lg-1 col-md-1 col-sm-1'></div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                        <img src='images/member/khua.jpg' />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Hồ Thị Khưa</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                        <img src='images/member/ky.jpg' />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Lê Quang Kỳ</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                    <img src='images/member/bang.jpg' />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Giả Cao Bằng</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                    <img src='images/member/manh.jpg' />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Nguyễn Hùng Mạnh</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'>
                    <img src='images/member/tuan.jpg' />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Nguyễn Anh Tuấn</p>
                        </div>
                    </div>
                    <div className='col=lg-1 col-md-1 col-sm-1'>

                    </div>
                </div>
            </div>
        );
    }
}

export default Member;