import {createStore} from 'redux'
import Layout from './component/Layout'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Layout />, document.getElementById('root'));

const reducer = function (state=[], action){
    if(action.type === "ADDCUSTOMER"){
        state.push(action.customer)        
    }

    /*if(action.type === "INC"){
        state = state + action.payroll;
    }
    if(action.type === "DEC"){
        state = state - action.payroll;
    }*/
    return state;
}

const store = createStore(reducer, [])

store.subscribe(() => {
    console.log("store change", store.getState());
})



store.dispatch({type:"ADDCUSTOMER", customer:{"ID":"001", "Name":"Terry"}});
store.dispatch({type:"ADDCUSTOMER", customer:{"ID":"002", "Name":"Melvin"}});
store.dispatch({type:"ADDCUSTOMER", customer:{"ID":"003", "Name":"Sammy"}});

//store.dispatch({type:"INC", payroll:5})
//store.dispatch({type:"INC", payroll:6})
//store.dispatch({type:"INC", payroll:7})
//store.dispatch({type:"DEC", payroll:2})
//store.dispatch({type:"DEC", payroll:4})
//store.dispatch({type:"DEC", payroll:5})