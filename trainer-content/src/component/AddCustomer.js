import React, { Component, PropTypes } from 'react'

export default class AddCustomer extends Component {
   render() {
      return (
         <div>
            Customer Name: <input type = 'text' ref = 'customername' /><br />
            Customer Age: <input type = 'text' ref = 'customerage' />
            <button onClick = {(e) => this.handleClick(e)}>Add</button>
         </div>
      )
   }
   handleClick(e) {
      const customerinput = this.refs.customername
      const customername = customerinput.value.trim()
      this.props.onAddClick(customername)
      customerinput.value = ''
   }
}