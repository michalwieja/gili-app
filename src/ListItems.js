import React from "react";
import Item from "./Item";

const ListItems = props => {
  let items = props.items.map(item => (
    <Item item={item} handleValue={props.handleValue} />
  ));
  return <ul>{items}</ul>;
};

export default ListItems;
