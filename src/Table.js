import React, { Component } from "react";
import Header from "./Header";
import ListItems from "./ListItems";

class Table extends Component {
  state = {
    items: [
      { id: 1, name: "kawa", price: 13, value: 0 },
      { id: 2, name: "wejscie", price: 18, value: 0 },
      { id: 3, name: "ciasto", price: 12, value: 0 }
    ],
    name: ""
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleValue = (name, option) => {
    const items = this.state.items.map(item => {
      if (name === item.name) {
        if (option === "plus") {
          item.value++;
        }
        if (option === "minus") {
          item.value--;
        }
      }
      return item;
    });
    this.setState({ items: items });
  };
  render() {
    return (
      <div className="table">
        <Header
          items={this.state.items}
          name={this.state.name}
          handleNameChange={this.handleNameChange}
        />
        <ListItems items={this.state.items} handleValue={this.handleValue} />
      </div>
    );
  }
}

export default Table;
