import Product from "./Product";

function ProductTab(){
    let styles ={
        display: "flex",
        flexWrap:"wrap",
        justfiyContent: "center",
        alignItems : "center",
    };
    return (
        <div style={styles}>
         <Product title="Phone " idx={0} />
         <Product title = "Iphone" idx={1}/>
         <Product title ="Macbook" idx={2}/>
         <Product title = "Ipad" idx={3}/>
        </div>
    );
} 

export default ProductTab;