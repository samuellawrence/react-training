import React from 'react'
import customersStore from '../store/customersstore'
import * as CustomerAction from '../actions/customersactions'

class Customers extends React.Component{
    constructor(){
        super();
        
        this.state = {
            customers: customersStore.getAllCustomers()
        }
        this.addCustomer = this.addCustomer.bind(this);
    }

    componentWillMount(){
        customersStore.on("customerChange", () => {
            this.setState({
                customers: customersStore.getAllCustomers()
            })
        });
    }

    addCustomer(){
//        customersStore.createNewCustomer("Aida","20");
        //dispatcher.dispatch({type:"CREATE_CUSTOMER", name: "Aida",  age: 20})
        CustomerAction.createCustomer("Aida",36);
    }

    render(){
        return(
            <div>
                <h4>Customers List</h4>
                <table width={"100%"}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((customer, position) =>
                                <TableRow key={customer.id} customer={customer}/>
                            )
                        }
                    </tbody>
                </table>
                <br/>
                <button onClick={this.addCustomer}>Add Customer</button>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.customer.id}</td>
                <td>{this.props.customer.name}</td>
                <td>{this.props.customer.age}</td>
            </tr>
        );
    }
}


export default Customers;