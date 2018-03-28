import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Menu from './component/menu'
import Footer from './component/footer'
import Dashboard from './component/dashboard'
import Customers from './component/customers'
import Products from './component/products'

import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class RouteMapping extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div className="primary-layout">
                    <Menu />
                        <div className="container">
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/customers" exact component={Customers}/>
                            <Route path="/products" exact component={Products}/>
                        </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<RouteMapping />, document.getElementById('root'));

