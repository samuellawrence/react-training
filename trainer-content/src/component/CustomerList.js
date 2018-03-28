import React, { Component, PropTypes } from 'react'
import Customer from './Customer.js'

export default class CustomerList extends Component {
   render() {
      return (
         <ul>
            {this.props.customers.map(customer =>
               <Customer
                  key = {customer.id}
                  {...customer}
               />
            )}
         </ul>
      )
   }
}