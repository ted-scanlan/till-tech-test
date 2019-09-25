import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'


class ItemButton extends Component {



  render() {

  return (

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose an Item
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cafe Latte</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Flat White</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cappucino</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Single Espresso</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Double Espresso</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cortado</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Tea</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Choc Mudcake</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Choc Mousse</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Affogato</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Blueberry Muffin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chocolate Chip Muffin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Muffin Of The Day</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
}
}



export default ItemButton;
