import React from "react";
import "./App.css";

const OtherDetails = ({ data }: any) => {
  return (
    <>
      {Object.keys(data)
        .map((itemKey) => {
          if (
            itemKey !== "available" &&
            itemKey !== "price" &&
            data[itemKey] &&
            typeof data[itemKey] !== "object"
          ) {
            const value = data[itemKey].toString();
            return (
              <tr key={itemKey}>
                <td>{itemKey}</td>
                <td>
                  {itemKey === "imageUrl" ? (
                    <img alt="no_image" src={value} />
                  ) : (
                    value
                  )}
                </td>
              </tr>
            );
          } else return undefined;
        })
        .filter((val) => val !== undefined)}
    </>
  );
};

export default OtherDetails;
