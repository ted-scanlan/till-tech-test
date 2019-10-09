import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class Receipt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderToPrint: ''
    }
  

  }



  render() {

    let  printRequest  = this.props.order
    let item = Object.keys(printRequest).map((key) =>
    <div key={key} className="row">
    <div>{printRequest[key]} X {key}</div>
    </div>
  )






  return (

    <div>
      <div>
      {item}


      </div>



    </div>


  );
}
}


export default Receipt;
