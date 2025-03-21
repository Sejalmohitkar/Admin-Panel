import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { 
  CircleHelp
} from "lucide-react";
import Graph from "./Graph";
import Piechart from "./Piechart"

const Dashboard = () => {
  return (
    <div className='container mt-4 mx-3'>
      <h4>Shopper Overview <CircleHelp /></h4>
      <Col md={11}>
      <Row className='mt-3'>
        <Col md={3}>
        <Card className="lh-1  border-0 rounded-4 shadow" style={{backgroundColor:"#F88AA5"}}>
          <Card.Body>
          <Card.Text className='text-light'>NET SALES</Card.Text>
            <Card.Title className='text-white'>$27,012</Card.Title>
            <Card.Text className='text-light'>+ 2% than last week</Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card className="lh-1 text-white border-0 rounded-4 shadow" style={{backgroundColor:"#B993F5"}}>
          <Card.Body>
            <Card.Text>ORDERS</Card.Text>
            <Card.Title>5,661</Card.Title>
            <Card.Text>+ 31,21% than last week</Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card className="lh-1 text-white border-0 rounded-4 shadow" style={{backgroundColor:"#69DCA7"}}>
          <Card.Body>
          <Card.Text>CUSTOMER</Card.Text>
            <Card.Title>15138</Card.Title>
            <Card.Text>+ 12% than last week</Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={3}>
        <Card className="lh-1 text-white border-0 rounded-4 shadow" style={{backgroundColor:"#F0C965"}}>
          <Card.Body>
          <Card.Text>GROWTH</Card.Text>
            <Card.Title>19.56</Card.Title>
            <Card.Text>- 487% than last week</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Col>

            
<Row className="gx-2 gy-3 mt-2">
        {/* Left Chart Card */}
        <Col md={7}>
            <Card.Body>
              < Graph/>
            </Card.Body>
        </Col>

        {/* Right Pie Chart Card */}
        <Col md={4}>
            <Card.Body>
              <Piechart />
            </Card.Body>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
