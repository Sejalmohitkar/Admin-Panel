import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Pagination,
} from "react-bootstrap";
import { Flame, Gift } from "lucide-react";
import Sidebar from "../../layout/Sidebar";
import Navbar1 from "../../layout/Navbar";
import axios from "axios";

function HotDeals() {
  const [cards, setCards] = useState([]);
  console.log("cards: ", cards.products);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// Pagination //
const [currentPage, setCurrentPage] = useState(1);
const [postPerPage, SetPostPerPage] = useState(0);


  // Fetch data from API
  const loadData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      console.log(response.data.carts); // API returns "carts", not "cards"
      setCards(response.data.carts);
    } catch (error) {
      console.error("Error fetching cards", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Pagination //

  const lastPostIndex = CurrentPage * postMessage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts =  cards.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="col-12 d-flex">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <Navbar1 />
        <Container className="mt-4">
        
          <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="">
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Discription</Form.Label>
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
            {cards.length > 0 ? (
              cards
                .flatMap((cart) => cart.products) // Flatten all products from all carts
                .slice(0, 25)
                .map((card, index) => (
                  <Col md={3} key={index} className="mb-3">
                    <Card
                      className="lh-1 border-0 rounded-4 shadow"
                      style={{ backgroundColor: "#F88AA5" }}
                    >
                      <Card.Body>
                        <Card.Text className="text-light fs-5">
                          Gift Card{" "}
                          <Gift
                            size={45}
                            style={{ marginInlineStart: "60px" }}
                          />
                        </Card.Text>
                        <Card.Title className="text-white fs-3">
                          ${card.price}
                        </Card.Title>
                        <Card.Text className="text-light fs-6">
                          {card.discountedTotal}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
            ) : (
              <p className="text-muted text-center">No hot deals available</p>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HotDeals;
