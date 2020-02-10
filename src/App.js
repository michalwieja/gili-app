import React, { Component } from "react";
import Table from "./Table";
import "./App.css";

class App extends Component {
  state = { total: 10 };

  resetTotal = () => {
    this.setState({
      total: 0
    });
  };
  render() {
    return (
      <>
        <h1 className="sum">
          Suma: {this.state.total}{" "}
          <button onClick={this.resetTotal}>reset</button>
        </h1>
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
        <Table total={this.state.total} />
      </>
    );
  }
}

export default App;
