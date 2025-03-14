export class ProductService{
    getProducts():Product[]{
        return[
        {name: "Keyboard", quantatiy: 25},
        {name: "Mouse", quantatiy: 20},
        {name: "Pencil", quantatiy: 15}

        ]
        

    }

}

export class Product{
    name:string;
    quantatiy:number;
}