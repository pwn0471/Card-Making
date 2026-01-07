import Product from "./Product";

import phoneImg from "./assets/download.jpg";
import iphoneImg from "./assets/download (4).jpg";
import macImage from "./assets/download (2).jpg";
import ipadImg from "./assets/download (1).jpg";

function ProductTab(){
    let styles ={
        display: "flex",
        flexWrap:"wrap",
        justfiyContent: "center",
        alignItems : "center",
    };
    return (
        <div style={styles}>
         <Product title="Phone " img={phoneImg} idx={0} />
         <Product title = "Iphone" img={iphoneImg} idx={1}/>
         <Product title ="Macbook" img={macImage} idx={2}/>
         <Product title = "Ipad" img={ipadImg} idx={3}/>
        </div>
        
    );
} 

export default ProductTab;