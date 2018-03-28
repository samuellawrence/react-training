import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class CustomersStore extends EventEmitter{
    constructor(){
        super();
        this.customers = [
            {id: "001", name:"Sammy", age:"20"},
            {id: "002", name:"BOOM", age:"19"},
            {id: "003", name:"Cutty", age:"20"}
        ];
    }

    createNewCustomer(name, age){
        let id = Date.now();
        this.customers.push({id, name, age});
        this.emit("customerChange");
    }

    getAllCustomers(){
        return this.customers;
    }

    handleAllActions(action){
        switch(action.type){
            case "CREATE_CUSTOMER":{
                this.createNewCustomer(action.name, action.age)
                break
            } 
            default:
                break;
        }
    }
}

const customersStore = new CustomersStore();

dispatcher.register(customersStore.handleAllActions.bind(customersStore))

export default customersStore