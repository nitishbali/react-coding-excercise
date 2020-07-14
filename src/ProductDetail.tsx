import React from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { IMenuItem } from "./App";
import Editable from "./Editable";
import OtherDetails from "./OtherDetails";

const ProductDetail = (props: any) => {
  const { itemId } = useParams();
  const { data } = props;

  const selectedItem: IMenuItem = data[itemId];

  return (
    <div className="Detail">
      <Link to="/">Back to Home</Link>
      {selectedItem && (
        <div className="Details-box">
          <h2>Item Detail</h2>
          <table>
            <tbody>
              <Editable
                data={{
                  price: selectedItem.price,
                  available: selectedItem.available,
                  itemId: selectedItem.itemId,
                }}
                changeHandler={props.changeHandler}
              />
              <OtherDetails data={selectedItem} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
