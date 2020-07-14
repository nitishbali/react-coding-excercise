import React from "react";
import "./App.css";

const Editable = (props: any) => {
  const { data } = props;
  return (
    <>
      <tr>
        <td>isAvailable</td>
        <td>
          <input
            name="available"
            defaultValue={data.available.toString()}
            onChange={(e) => {
              props.changeHandler(e.target.value, e.target.name, data.itemId);
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Price</td>
        <td>
          <input
            name="price"
            defaultValue={data.price}
            onChange={(e) => {
              props.changeHandler(e.target.value, e.target.name, data.itemId);
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default Editable;
