import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomeAdmin from '../admin/homeAdmin';
import Login from '../layout_user/header/login';
import Signup from '../layout_user/header/signup';
import Showhomepage from '../layout_user/showhomepage';

import DetailProduct from '../layout_user/body/products/detailProduct';
import Homepersonal from '../layout_user/body/personal/homepersonal';
import Chat from '../admin/chat/App';
import App from '../layout_user/body/chatwithadmin/App';

import Cart from '../layout_user/body/cart/Cart';
import Payment from '../layout_user/body/cart/Payment';


class Homepage extends Component {
    render() {
        return (
            <Router>
                <Link to='/'></Link>
                <Link to='/admin'></Link>
                <Switch>
                    <Route path='/' exact component={Showhomepage}  />                
                    <Route path='/admin' exact component={HomeAdmin}/>
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                 

                    <Route path="/Cart/:id?"exact component={Cart} />
                    <Route path="/Payment"exact component={Payment} />




                    <Route path='/chatAdmin' exact component={Chat} />
                    <Route path='/chat' exact component={App}/>
                    <Route path='/detail/:id?' exact component={DetailProduct}/>
                    <Route path='/personal' exact component={Homepersonal} />
                </Switch>
            </Router>
        );
    }
}
export default Homepage;