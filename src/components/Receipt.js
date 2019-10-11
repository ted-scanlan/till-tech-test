import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class Receipt extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    let menuPrices = this.props.menu['prices'][0]
    console.log(menuPrices)

    let printRequest  = this.props.order

    let item = Object.keys(printRequest).map((key) =>
    <div key={key} className="row">
    <div >
    <div>{printRequest[key]} X {key} - £{menuPrices[key]*printRequest[key]} </div>
    </div>
    </div>

  )
  let total = 0
  Object.keys(printRequest).forEach((key) =>
    total += menuPrices[key]*printRequest[key]
  )

    // total * 0.15
    // let roundedtax = tax.toFixed(2)



  let tax = total * 0.15
  let roundedtax = tax.toFixed(2)


  let receiptTotal = tax + total
  let roundedReceiptTotal = receiptTotal.toFixed(2)





  return (


      <div>
      {item}
      <div>
      Service (0.15%) - £{roundedtax}
      </div>
      Total bill - £{roundedReceiptTotal}
      </div>
  );
}
}


export default Receipt;
