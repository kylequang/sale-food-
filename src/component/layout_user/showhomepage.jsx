import React, { Component } from 'react';
import Buttonchat from './body/chatwithadmin/buttonchat';
import Danhmucsanpham from './body/danhmucsanpham';
import Productbanchay from './body/productbanchay';
import Sellproducts from './body/products/sellproducts';
import Slideimage from './body/slideimage';
import Footer from './footer/footer';
import Member from './footer/member';
import Header from './header/header';

class Showhomepage extends Component {
    render() {
        return (
            <div className='container-fluid ' style={{ backgroundColor: "	#a6b894" }} >
                <div className='row '>
                    <Header></Header>
                </div>
                <hr></hr>


                <div className='row' id="slideimg">
                    <Slideimage></Slideimage>
                </div>
                <hr></hr>
                <div >
                    <Productbanchay></Productbanchay>
                    <hr></hr>
                    <div >
                        <Sellproducts></Sellproducts>
                        <hr></hr>
                        <Danhmucsanpham></Danhmucsanpham>
                    </div>

                </div>
                <br></br>
                <div className='row'>
                    <Member></Member>
                </div>


                <div className='row'>
                    <Buttonchat></Buttonchat>
                </div>
            </div>
        );
    }
}

export default Showhomepage;