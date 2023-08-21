import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}

  {/* <div>
        {productIds.map((productId) => (
          <ProductDetails key={productId} productId={productId} />
        ))}
      </div> */}
    </>
  );
};

export default ProductsList;
