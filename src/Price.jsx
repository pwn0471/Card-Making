export default function Price({oldPrice , newPrice}){
    let oldStyles = {
        textDecorationLine:"Line-through",
    };
    let newstyles = {
        fontWeight : "bold",
    };
    let styles ={
        backgroundColor:"#e8be25ff",
        height:"30px",
        width:"220px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
             &nbsp; &nbsp;  &nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    );
}