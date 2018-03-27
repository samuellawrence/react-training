import React from 'react';
import ReactDOM from 'react-dom';

class NewProduct extends React.Component{
    
    constructor(){
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.state = {
            productName:"",
            productDescription:"",
            price: 0
        }

        this.updateProductName = this.updateProductName.bind(this);
        this.updateProductDescription = this.updateProductDescription.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm(){
        this.setState({productName:""});
        this.setState({productDescription:""});
        this.setState({price:0});
        ReactDOM.findDOMNode(this.refs.myProductName).focus();
    }

    findDomNodeHandler(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color='blue';
    }

    updateProductName(event){
        this.setState({productName: event.target.value});
    }

    updateProductDescription(event){
        this.setState({productDescription: event.target.value});
    }

    updatePrice(event){
        this.setState({price: event.target.value});
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update")
    }

    componentDidUpdate(prevProps, nextState){
        console.log("Component did udpate");
    }

    render(){
        return(
        <div>
            <hr/>
                Product Name:
                <input type="text" value={this.state.productName} onChange={this.updateProductName} ref="myProductName"/>
                <h4>{this.state.productName}</h4>
                <br/>
                Product Description:
                <input type="text" value={this.state.productDescription} onChange={this.updateProductDescription}/>
                <h4>{this.state.productDescription}</h4>
                <br/>
                Product Price:
                <input type="text" value={this.state.price} onChange={this.updatePrice}/>
                <h4>{this.state.price}</h4>
                <br/>

                <button onClick={this.props.stateHandler}>Add Product</button>
                <button onClick={this.props.forceHandler}>Click here to refresh</button>
                <button onClick={this.findDomNodeHandler}>Change color</button>
                <button onClick={this.clearForm}>Clear Form</button>
                <h4>Random Number: {Math.random()}</h4>
                <div id="myDiv">Find Dom Node Handler</div>
            <hr/>
        </div> );       
    }
}

export default NewProduct;