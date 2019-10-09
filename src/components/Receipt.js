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

    let  printRequest  = this.props.order
    let item = Object.keys(printRequest).map((key) =>
    <div key={key} className="row">

    <div >
    <div>{printRequest[key]} X {key} - £{menuPrices[key]*printRequest[key]} </div>
    </div>
    </div>
  )






  return (


      <div>
      {item}
      </div>






  );
}
}


export default Receipt;
