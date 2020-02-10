import React from "react";

const Header = props => {
  let sum = 0;
  let items = props.items;
  items.map(item => (sum += item.price * item.value));
  return (
    <header>
      <span>
        SUMA: <strong>{sum}</strong> PLN
      </span>
      <span>
        <input
          type="text"
          value={props.name}
          onChange={props.handleNameChange}
        />
      </span>
    </header>
  );
};

export default Header;
