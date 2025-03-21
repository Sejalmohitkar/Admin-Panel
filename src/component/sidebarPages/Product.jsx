import React, { useEffect, useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import { ShoppingCart } from "lucide-react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

function Product() {

  const [products, SetProducts] = useState([]);

  const loadData = async () => {
    try{
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      SetProducts(response.data.products)
    }catch(error){
      console.log("Error Fetching Product", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Rouge Cream",
  //     price: "$299",
  //     description: "Here's a description of this wonderful product",
  //     image: Card1,
  //     label: "New",
  //   },
  //   {
  //     id: 2,
  //     title: "Absolute Revitalizing",
  //     price: "$245",
  //     description: "Here's a description of this wonderful product",
  //     image: Card2,
  //     label: "Sale",
  //   },
  //   {
  //     id: 3,
  //     title: "La Mer",
  //     price: "$247",
  //     description: "Here's a description of this wonderful product",
  //     image: Card3,
  //     label: "Sale",
  //   },
  //   {
  //     id: 4,
  //     title: "Renergie Lift",
  //     price: "$399",
  //     description: "Here's a description of this wonderful product",
  //     image: Card4,
  //     label: "New",
  //   },
  //   {
  //     id: 5,
  //     title: "Flawless, Poreless",
  //     price: "$372",
  //     description: "Here's a description of this wonderful product",
  //     image: Card5,
  //     label: "Sale",
  //   },
  //   {
  //     id: 6,
  //     title: "Skin Cream",
  //     price: "$399",
  //     description: "Here's a description of this wonderful product",
  //     image: Card1,
  //     label: "New",
  //   },
  // ];

  return (
    <div>
      <div className="col-12 d-flex ">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Navbar1 />
          <div className="mt-3 mx-3">
            <h4>
              Hot Deals <ShoppingCart />
            </h4>

            <Container className="mt-3">
              <Row className="g-4">
                {products.map((product) => (
                  <Col md={4} key={product.id}>
                    <Card className="shadow-lg border-0 rounded-4">
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={product.thumbnail}
                          className="rounded-top-4"
                        />
                        
                        {product.label && (
                          <Badge
                            bg={product.label === "Sale" ? "primary" : "danger"}
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                            }}
                          >
                            {product.label}
                          </Badge>
                        )}
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          {product.title}
                        </Card.Title>
                        <Card.Text className="text-muted text-truncate">
                          {product.description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">{product.price}</span>
                          <Button variant="outline-primary" size="sm">
                            EDIT
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
