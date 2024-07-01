import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
let oldPrice = ["10,000","20,000","30,000","40,000"]
let newPrice = ["5,000","10,000","30,000","25,000"]
let descripition = [
    ["Pocket Flyer","Pack & Soar"],
    ["Wrist Computer","Smart Timepiece"],
    ["Digital Portal","Immersive Visor"],
    ["Automated Assistants","Connected Conveniences"]]
    return(
        <div className="Product" >
            <p><b>{title}</b></p>
            <p>{descripition[idx][0]}</p>
            <p>{descripition[idx][1]}</p>
            <p><Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} /></p>
        </div>
    );
}

export default Product