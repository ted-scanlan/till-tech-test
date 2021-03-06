import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Receipt from './Receipt.js';
import OrderButton from './OrderButton.js';


class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item : '',
      quantity: '',
      name: '',
      totalOrder: {},
      isEmptyState: true
    }

    this.saveOrder=this.saveOrder.bind(this)

  }

  startAgain = () => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      showReceipt: false,
      totalOrder: {}
    })


  }



  displayReceipt = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      showReceipt: true
    })

  }

  saveOrder() {

    let orders = {...this.state.totalOrder};
    let item = this.state.item
    let quantity = this.state.quantity
    orders[item] = quantity

    this.setState({
      totalOrder: orders
    })
  }

    handleItemChange = (event) => {
      this.setState({
        item: event.target.value
      });
    }

    handleQuantityChange = (event) => {
      this.setState({
        quantity: event.target.value
      });
    }





    render() {

      console.log(this.props);

      return (
        <Container>
        <Row>
        <Col>

        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">

        <Form.Control as="select" onChange={this.handleItemChange} >
        <option>Choose item</option>
        <option>Cafe Latte</option>
        <option>Cappucino</option>
        <option>Single Espresso</option>
        <option>Double Espresso</option>
        <option>Americano</option>
        <option>Cortado</option>
        <option>Tea</option>
        <option>Choc Mudcake</option>
        <option>Choc Mousse</option>
        <option>Affogato</option>
        <option>Tiramisu</option>
        <option>Blueberry Muffin</option>
        <option>Chocolate Chip Muffin</option>
        <option>Muffin Of The Day</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Control as="select" onChange={this.handleQuantityChange}>
        <option>Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        </Form.Control>
        </Form.Group>
        {this.state.isEmptyState &&
          <Button onClick={this.saveOrder} variant="primary" type="button">
          Add to Order
          </Button>}

          {this.state.isEmptyState &&
            <OrderButton print={this.displayReceipt}/>}

            </Form>
            </Col>


            <Col>
            {this.state.showReceipt &&
              <Receipt order={this.state.totalOrder} menu={this.props.menu} name={this.props.name} startAgain={this.startAgain}/>

            }
            </Col>
            </Row>

            </Container>



          );
        }
}



export default Order;
