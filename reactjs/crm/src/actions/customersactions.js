import dispatcher from '../dispatcher'

export function createCustomer(name, age){
    dispatcher.dispatch({
        type: "CREATE_CUSTOMER",
        name: name,
        age: age
    })
}


