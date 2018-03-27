import React from 'react';

class NewProduct extends React.Component{
   
    render(){
        return(
        <div>
            <hr/>
                <button onClick={this.props.stateHandler}>Add Product</button>
                <button onClick={this.props.forceHandler}>Click here to refresh</button>
                <h4>Random Number: {Math.random()}</h4>
            <hr/>
        </div> );       
    }
}

export default NewProduct;