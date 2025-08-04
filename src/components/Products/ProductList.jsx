import React from "react";
import products from "../../data/ProductsData";
import ProductCard from "./ProductCard";
import "./productlist.css";
export default function ProductList() {
  return (
    <>
      <div className="our-products">
        <div className="hot-deal">
          <div className="line"></div>
          <h2>Hot Deals</h2>
          <div className="line"></div>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
