import React from "react";
import Item from "./Item";

const ListItems = props => {
  let items = props.items.map(item => (
    <Item key={item.id} item={item} handleValue={props.handleValue} />
  ));
  return <ul>{items}</ul>;
};

export default ListItems;
