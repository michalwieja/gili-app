import React, { Component } from "react";
import Table from "./Table";
import "./App.css";

class App extends Component {
  state = { total: 0 };

  resetTotal = () => {
    this.setState({
      total: 0
    });
  };

  handleTotalSum = sum => {
    this.setState({ total: this.state.total + sum });
  };
  render() {
    return (
      <>
        <h1 className="sum">
          Suma: {this.state.total}{" "}
          <button onClick={this.resetTotal}>reset</button>
        </h1>
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
        <Table handleTotalSum={this.handleTotalSum} />
      </>
    );
  }
}

export default App;
