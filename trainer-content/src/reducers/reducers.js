import { combineReducers } from 'redux'
import { ADD_CUSTOMER } from '../actions/actions'

function customer(state, action) {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                id: action.id,
                name: action.name,
                age: action.age
            }
        default:
            return state
    }
}
function customers(state = [], action) {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [
                ...state, 
                customer(undefined, action)
            ]
        default:
            return state
    }
}
const customerApp = combineReducers({
   customers
})
export default customerApp