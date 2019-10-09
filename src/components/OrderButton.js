import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class OrderButton extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }


  }


  render() {



  return (

    <div>
    <Button onClick={this.props.print} variant="primary" type="button">
    Print Receipt
    </Button>

    </div>


  );
}
}


export default OrderButton;
