import React from "react";

const Header = props => {
  let sum = 0;
  let items = props.items;
  items.map(item => (sum += item.price * item.value));
  return (
    <header>
      <div className="total">
        <div>
          SUMA: <strong>{sum}</strong> PLN
        </div>
        <input
          type="text"
          value={props.name}
          onChange={props.handleNameChange}
        />
      </div>
      <div className="hours">
        <div>
          <button onClick={props.handleStartTime}>start</button>
          <input
            type="time"
            disabled={true}
            id="appt"
            name="appt"
            min="10:00"
            max="19:00"
            value={props.startTime}
          />
        </div>
        <div>
          <button onClick={props.handleStopTime}>stop</button>
          <input
            type="time"
            disabled={true}
            id="appt"
            name="appt"
            min="10:00"
            max="19:00"
            value={props.stopTime}
          />
        </div>
        <div>
          <label>
            <small>Czas w Giligili </small>
            <input
              type="time"
              disabled={true}
              id="appt"
              name="appt"
              min="10:00"
              max="19:00"
              value={props.timeSpent}
            />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
