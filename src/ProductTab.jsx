import Product from "./Product"


function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignElements: "center",
    }
    return(
        <div style={styles}>

        <Product title = "Foldable Drone"idx={0}/>
        <Product title = "Smart watch" idx={1}/>
        <Product  title = "Virtual Reality Headset" idx={2}/>
        <Product  title = "Smart Home Devices " idx={3}/>
        </div>
    )
}

export default ProductTab