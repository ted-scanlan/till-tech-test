import React, { Component } from 'react';
import Menu from './components/Menu';
import ItemButton from './components/ItemButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import myData from './data.json';

class App extends Component {

  state = {
    menu: myData,

    totalOrder: [
      {

      }
    ],
    individualOrder: []


   }

  render() {
  return (

    <div className="App">
      <h1> Ted's Coffee Shed</h1>
      <Container>
      <Row>
      <Col>
      <Menu menu={this.state.menu}/>
      </Col>
      </Row>
      <Row>
      <Col>
        <h2> Place your order:</h2>
        <ItemButton/>
      

        </Col>
        <Col>
        <h2> Receipt</h2>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
}

export default App;
