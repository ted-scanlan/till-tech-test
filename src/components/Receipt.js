import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles.css'


class Receipt extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  startAgain = () => {
  this.props.startAgain()
}



  render() {

console.log(this.props);

    let menuPrices = this.props.menu['prices'][0]
    console.log(menuPrices)

    let printRequest  = this.props.order

    let item = Object.keys(printRequest).map((key) =>

      <div className="totalBill" style={{textAlign: 'left'}}>
      {printRequest[key]} X {key} -
      </div>
  )
  let price = Object.keys(printRequest).map((key) =>

  <div>£{(menuPrices[key]*printRequest[key]).toFixed(2)} </div>

)
let total = 0
Object.keys(printRequest).forEach((key) =>
  total += menuPrices[key]*printRequest[key]
)
let tax = total * 0.15
let roundedtax = tax.toFixed(2)

let receiptTotal = tax + total
let roundedReceiptTotal = receiptTotal.toFixed(2)


const ColoredLine = ({ color }) => (
  <hr
  style={{
    color: color,
    backgroundColor: color,
    height: 5
  }}
  />
);


  return (

    <Container>

    <Row>
    <Col>
    {item}
    </Col>
    <Col>
    {price}
    </Col>
    </Row>
    <Row>
    <Col>
    <div className="totalBill" style={{textAlign: 'left'}}>
    Service (0.15%) -
    </div>
    </Col>
    <Col>
    £{roundedtax}
    </Col>
    </Row>
    <ColoredLine color="black" />
    <Row>
    <Col>
    <div className="totalBill" style={{textAlign: 'left'}}>
    Total bill -
    </div>
    </Col>
    <Col>
    £{roundedReceiptTotal}
    </Col>
    </Row>
    <hr/>
    <Row>
    <Button onClick={this.startAgain} variant="primary" type="button">
    Place another order
    </Button>
    </Row>
    </Container>

  );
}
}


export default Receipt;
