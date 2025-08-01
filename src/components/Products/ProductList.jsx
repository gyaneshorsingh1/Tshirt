import React from "react";
import products from "../../data/ProductsData";
import ProductCard from "./ProductCard";
const ProductList=()=>{
    return(
        <>
        <div className="our-products">
            <div className="hot-deal">
                <div className="line"></div>
               <h2>Hot Deals</h2>
               <div className="line"></div>

            </div>
           <ProductCard />
        </div>
        </>
    )
}
export default ProductList