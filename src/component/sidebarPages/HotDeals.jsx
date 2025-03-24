import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal
} from "react-bootstrap";
import { Flame, Gift } from "lucide-react";
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import axios from "axios";
import PaginationComponent from "./Pagination";  // Renamed to avoid conflicts

function HotDeals() {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  // Fetch data from API
  const loadData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      setCards(response.data.carts);
    } catch (error) {
      console.error("Error fetching cards", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Flatten products from all carts
  const allProducts = cards.flatMap(cart => cart.products);

  // Pagination logic
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = allProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="col-12 d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar1 />
        <Container className="mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>
              Hot Deals <Flame />
            </h4>
            <Button variant="dark" onClick={handleShow}>
              + New deals
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>NEW DEALS</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="dealTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dealDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <Row className="mt-3">
            {allProducts.length > 0 ? (
              currentPosts.map((product, index) => (
                <Col md={3} key={index} className="mb-3">
                  <Card className="lh-1 border-0 rounded-4 shadow" style={{ backgroundColor: "#F88AA5" }}>
                    <Card.Body>
                      <Card.Text className="text-light fs-5">
                        Gift Card <Gift size={45} style={{ marginInlineStart: "60px" }} />
                      </Card.Text>
                      <Card.Title className="text-white fs-3">${product.price}</Card.Title>
                      <Card.Text className="text-light fs-6">{product.discountedTotal}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-muted text-center">No hot deals available</p>
            )}
          </Row>

          {/* Pagination Component */}
          <PaginationComponent 
            totalPosts={allProducts.length} 
            setPostPerPage = {setPostPerPage}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Container>
      </div>
    </div>
  );
}

export default HotDeals;
