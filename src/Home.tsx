import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import menuData from "./menu-data.json";
import { IMenuData } from "./App";

const Home = () => {
  let menu: IMenuData = menuData;
  let objectKeys = Object.keys(menu);
  return (
    <div className="Home">
      <h1>Menu</h1>
      <ul>
        {objectKeys.map((val) => (
          <li key={menu[val].itemId}>
            <Link to={`/${menu[val].itemId}`}>{menu[val].name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
