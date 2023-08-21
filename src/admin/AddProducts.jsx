import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);

  const addProduct = async (e) => {
    e.preventDefault();

    const product = {
      title: enterTitle,
      shortDesc: enterShortDesc,
      description: enterDescription,
      category: enterCategory,
      price: enterPrice,
      imgUrl: enterProductImg,
    };

    console.log(product);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">AddProducts</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form_group">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Double sofa"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="lorem....."
                  value={enterShortDesc}
                  onChange={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description....."
                  value={enterDescription}
                  onChange={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <div className="d-flex aligin-items-center justify-content-between gap-5">
                <FormGroup className="form_group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form_group w-50">
                  <span>Category</span>
                  <br />
                  <select
                    className="w-100 p-2 border border-dark rounded outline-none"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                  >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form_group">
                  <span>Product Image</span>
                  <input
                    type="file"
                    required
                    // value={enterProductImg}
                    onChange={(e) => setEnterProductImg(e.target.files[0])}
                  />
                </FormGroup>
              </div>

              <button className="buy_btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts; // 37:55
