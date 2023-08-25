import React from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import products from "./../assets/data/product";

const ProductDetails = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  console.log(`ID: ${id}`);
  // console.log('ID:', id); 

  // Assuming 'products' is an array of objects with 'id' properties
  const product = products.find((item) => item.id === id);
  console.log("Product:", product);

  // const product = products.find((item) => item.id === parseInt(id));


  if (!product) {
    console.log("Product not found"); // Log if the product is not found
  }

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
  } = product;

  return (
    <Helmet>
      <CommonSection />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
              {/* <img src={imgUrl} alt={`Product: ${productName}`} /> */}
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <p>({avgRating}ratings)</p>
                </div>

                <span>{price}</span>
                <p>{shortDesc}</p>
                <p>{reviews}</p>
                <p>{description}</p>

                <button className="buy_btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
          {/* console.log(imgUrl); console.log(productName); console.log(price);
          console.log(avgRating); console.log(reviews); console.log(shortDesc);
          console.log(description); */}

          {/* <div> */}
            {/* <h2>Product Details</h2>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p> */}
            {/* Display other product details as needed */}
          {/* </div> */}

        </Container>
      </section>
    </Helmet>
  );
};
// 43:00 => asc.desc
// 55:00 => description and reviews
// 1:08 => you may also like
// 1:15 => shop ma responsive css checked
// 1:17:52 => product details ma responsive css
// 1:18-19 => product details ma review section
// 1:26 => cart section

//1:22:30 => db
export default ProductDetails;
