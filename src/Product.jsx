import "./Product.css"
import Price from "./Price";

function Product({title,idx}){
let oldPrice = ["100","200","300","400"]
let newPrice = ["50","100","300","250"]
let descripition = [["good","real good"],["better","feelin good"],["beast","cant match"],["great","goat"]]
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