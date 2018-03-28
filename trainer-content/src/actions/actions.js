export const ADD_CUSTOMER = 'ADD_CUSTOMER'

let nextCustomerId = 0

export function addCustomer(name, age) {
    return {
        type:"ADD_CUSTOMER",
        id: nextCustomerId++,
        name: name,
        age: age
    };
}