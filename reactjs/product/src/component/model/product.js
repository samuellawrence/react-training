class Product {
    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
}

export default Product;