import React from "react";

const Item = props => {
  let item = props.item;
  return (
    <li>
      {item.name} {item.price} PLN
      <div className="value">
        <button
          disabled={item.value === 0 ? true : false}
          onClick={() => props.handleValue(item.name, "minus")}
        >
          -
        </button>
        {item.value}
        <button onClick={() => props.handleValue(item.name, "plus")}>+</button>
      </div>
    </li>
  );
};

export default Item;
