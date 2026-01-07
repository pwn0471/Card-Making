import "./Product.css"; 
import Price  from "./Price";

function Product({title ,idx, img}){

    let oldprices = ["99,999", "1,50,000", "1,70,000", "49,000"];
    let newprices = ["9999", "15000", "17000", "4900"];

    let description = [
       [ "SamsungS25ultra", "200 megapixel, 1TB"],
        ["Iphone17promax", "100 megapisel, 1TB"],
        ["Mac air5", "512GB, A5 chipset"],
        ["New Ipad", "256GB, A2 chipset"],
         
    ];
    
    return (
        <div className=" Product">
            <h4>{title}</h4>
            <img src={img} alt={title} width="150" height="150" border-radius="50%"/>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>


            <Price  oldPrice={oldprices[idx]} newPrice={newprices[idx]}/>
        
        </div>
    );
}

export default Product;