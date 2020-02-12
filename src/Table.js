import React, { Component } from "react";
import Header from "./Header";
import ListItems from "./ListItems";

class Table extends Component {
  state = {
    items: [
      { id: 1, name: "pierwsza godzina", price: 18, value: 0 },
      { id: 2, name: "kolejna godzina", price: 12, value: 0 },
      { id: 3, name: "bez limitu", price: 35, value: 0 },
      { id: 4, name: "rodzenstwo pierwsza godzina", price: 15, value: 0 },
      { id: 5, name: "rodzenstwo kolejna godzina", price: 12, value: 0 },
      { id: 6, name: "rodzenstwo bez limitu", price: 30, value: 0 },
      { id: 7, name: "espresso", price: 6, value: 0 },
      { id: 8, name: "podwojne espresso", price: 7, value: 0 },
      { id: 9, name: "czarna", price: 10, value: 0 },
      { id: 10, name: "flat white", price: 11, value: 0 },
      { id: 11, name: "cappucino", price: 11, value: 0 },
      { id: 12, name: "latte", price: 12, value: 0 },
      { id: 13, name: "herbata", price: 12, value: 0 },
      { id: 14, name: "lemoniada", price: 8, value: 0 },
      { id: 15, name: "smoothie", price: 8, value: 0 },
      { id: 16, name: "sok", price: 7, value: 0 },
      { id: 17, name: "jagoda", price: 13, value: 0 },
      { id: 18, name: "ciasto13", price: 13, value: 0 },
      { id: 19, name: "ciasto12", price: 12, value: 0 },
      { id: 20, name: "ciasto9", price: 9, value: 0 },
      { id: 21, name: "ciasto8", price: 8, value: 0 }
    ],
    name: "",
    startTime: "15:10",
    stopTime: "",
    timeSpent: "",
    minutesSpent: ""
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

  handleStartTime = e => {
    const d = new Date();
    const hour = d.getHours();
    const minute = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

    this.setState({
      startTime: hour + ":" + minute
    });
  };

  handleStopTime = e => {
    const d = new Date();
    const hour = d.getHours();
    const minute = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

    let startHour = this.state.startTime.split(":")[0];

    let deltaHour = hour * 60 - startHour * 60;
    let deltaMinute = minute - this.state.startTime.split(":")[1];
    let totalMinutes = deltaHour + deltaMinute;

    let minutesSpent = totalMinutes % 60;
    let hoursSpent = (totalMinutes - minutesSpent) / 60;

    console.log(deltaHour + deltaMinute);

    this.setState({
      stopTime: hour + ":" + minute,
      timeSpent: "0" + hoursSpent + ":" + minutesSpent,
      minutesSpent: minutesSpent
    });
  };
  render() {
    return (
      <div className="table">
        <Header
          items={this.state.items}
          name={this.state.name}
          startTime={this.state.startTime}
          stopTime={this.state.stopTime}
          timeSpent={this.state.timeSpent}
          handleNameChange={this.handleNameChange}
          handleStartTime={this.handleStartTime}
          handleStopTime={this.handleStopTime}
        />
        <ListItems items={this.state.items} handleValue={this.handleValue} />
      </div>
    );
  }
}

export default Table;
