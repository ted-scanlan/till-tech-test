import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'


class ItemButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : '',
    };
  }

    select = (event) => {
      this.setState({
        value: event.target.innerText
      });

      setTimeout(() =>
      console.log(this.state.value), 1000);

    }


  render() {

  return (

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose an Item
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey= 'abc' href="#/action-1">Cafe Latte</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Flat White</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Cappucino</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Single Espresso</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Double Espresso</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Cortado</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Tea</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Choc Mudcake</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Choc Mousse</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Affogato</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Blueberry Muffin</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Chocolate Chip Muffin</Dropdown.Item>
        <Dropdown.Item onClick={this.select}>Muffin Of The Day</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
}
}



export default ItemButton;
