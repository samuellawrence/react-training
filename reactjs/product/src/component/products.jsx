import React from 'react'



class Products extends React.Component{ 
    render(){
        return (
            <div>
                <table  width={ "100% "}>
                    <tbody>
                        {
                            this.props.products.map((product, position) => <TableRow  key={position} product={product}/>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.description}</td>
                <td style={(this.props.product.price > 1000) ? {color:"red"} : {color:"green"}}>{this.props.product.price}</td>
            </tr>
        )
    }
}


export default Products;