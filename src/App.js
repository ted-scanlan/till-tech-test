import React, { Component } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



import './App.css';
import myData from './data.json';

class App extends Component {

  state = {
    menu: myData,
    name: '',
    individualOrder: []


   }

   handleNameChange = (event) => {
     this.setState({
       name: event.target.value
     });
   }

   displayMessage = () => {
     this.setState({
       ...this.state,
       showMessage: true
     })

   }

  render() {
  return (

    <div className="App">
      <h1> Ted's Coffee Shed</h1>
      <Container>
      <Row>

      <Col>
      <Form>
      <Form.Control type="email" placeholder="What's your name?" onChange={this.handleNameChange}  />
      <Button variant="primary" type="button" onClick={this.displayMessage}>Enter</Button>
      </Form>
        </Col>
        <Col>
      {this.state.showMessage &&
        <div>
      Welcome {this.state.name}! Please make an order!
        </div>
      }


      </Col>

      </Row>
      <Row>
      <Col>
      <Menu menu={this.state.menu}/>
      </Col>
      </Row>
      <Row>
      <Col>
        <h2> Place your order:</h2>
        <Order menu={this.state.menu} name={this.state.name}/>


        </Col>

      </Row>
      </Container>
    </div>
  );
}
}

export default App;
