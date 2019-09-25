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
    <div className="Menu">
      <h1> Menu</h1>
      <div className="content">
        {this.getValues()}

      </div>
    </div>
  );
}
}

export default Menu;
