import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import Products from './products'
import NewProduct from './newproduct'
import Product from './model/product'

class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                new Product("1","Mac","Apple laptop","1800"),
                new Product("2","Pixel","Google Phone","2000"),
                new Product("3","OnePlus 5T", "Oxygen Phone","1500"),
                new Product("4","Oral-B Brush","Tooth Brush","10")
            ]
        };

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    setStateHandler(){
        var newProduct = new Product("5","Keyboard","Logitech","100");
        var productsArray = this.state.products.slice();
        productsArray.push(newProduct);
        this.setState({products:productsArray});
    }

    forceUpdateHandler(){
        this.forceUpdate();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className ="col-md-12">
                        <Header companyName={this.props.companyName} companyMoto={this.props.companyMoto}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Products products={this.state.products}/>
                        <NewProduct products={this.state.products} stateHandler={this.setStateHandler} forceHandler={this.forceUpdateHandler}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    };
};

Layout.propTypes = {
    companyName: PropTypes.string,
    companyMoto: PropTypes.string
};

Layout.defaultProps = {
    companyName:"My Company Name",
    companyMoto:"Build the world you like"
};

export default Layout