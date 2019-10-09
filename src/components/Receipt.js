import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class Receipt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderToPrint: ''
    }
      this.logReceipt=this.logReceipt.bind(this)

  }

  logReceipt() {

    this.setState({
      orderToPrint: this.props.order
    })




  }

  render() {

    let  printRequest  = this.props.order
    let item = Object.keys(printRequest).map((key) =>
    <div key={key} className="row">
    <div>{printRequest[key]} X {key}</div>
    </div>
  )




  setTimeout(console.log(item), 1000);

  return (

    <div>
      <div>
      {item}


      </div>

      <Button onClick={this.logReceipt} variant="primary" type="button">
     log Receipt
     </Button>

    </div>


  );
}
}


export default Receipt;
