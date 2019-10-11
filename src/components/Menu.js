import React, { Component } from 'react';


class Menu extends Component {

getValues() {
let arr = [];
arr = Object.keys(this.props.menu.prices[0]).map((key) =>
  <div key={key} className="row">
    <div>{key} - {this.props.menu.prices[0][key]}</div>
  </div>
)

return arr;

}

  render() {

  return (

    <div className="Menu" style={headerStyle} >
      <h1> Menu</h1>
      <div className="content" style={menuStyle}>
        {this.getValues()}

      </div>
    </div>

  );
}
}

const menuStyle = {
textAlign: 'center',
  margin: 20,
  backgroundColor: 'grey'
}
const headerStyle = {
textAlign: 'left',
  marginLeft: 50,

}

export default Menu;
