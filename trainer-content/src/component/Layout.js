import React from 'react'
import { connect } from 'react-redux'
import { addCustomer } from '../actions/actions'

import AddCustomer from '../component/AddCustomer.js'
import CustomerList from '../component/CustomerList.js'

class App extends React.Component {
    render() {
        const { dispatch, visibleCustomers } = this.props      
        return (
            <div>
                <AddCustomer onAddClick = {name => dispatch(addCustomer(name))} />
                <CustomerList customers = {visibleCustomers}/>
            </div>
        )
    }
}
function select(state) {
    return {
        visibleCustomers: state.customers
    }
}
export default connect(select)(App);