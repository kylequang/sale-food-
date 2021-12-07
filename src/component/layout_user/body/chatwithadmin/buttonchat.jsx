import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Buttonchat extends Component {
    render() {
        if(localStorage.getItem("user")!=null){
            return (
                <div className='row fixed-bottom' style={{marginBottom:'20px'}}>
                    <div className='col-lg-11 col-md-11 col-sm-11'>
                    </div>
                    <div className='col-lg-1 col-md-1 col-sm-1 '>
                        <Link to='/chat'>
                        <button className='fa fa-comments btn btn-info' style={{height:'40px'}} >Chat</button>
                        </Link>
                    </div>
                </div>
            );
        }else{
            return (
                <div className='row fixed-bottom' style={{marginBottom:'20px'}}>
                    <div className='col-lg-11 col-md-11 col-sm-11'>
                    </div>
                    <div className='col-lg-1 col-md-1 col-sm-1 '>
                       
                        <button onClick={()=>{alert("Bạn chưa đăng nhập")}} className='fa fa-comments btn btn-info' style={{height:'40px'}} >Chat</button>
                       
                    </div>
                </div>
            );
        }
      
    }
}
export default Buttonchat;