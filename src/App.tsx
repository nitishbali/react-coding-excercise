import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import menuData from "./menu-data.json";

export interface IMenuItem {
  available: boolean;
  category: string;
  description: string;
  imageUrl: string;
  itemId: number;
  modifierGroups: object;
  name: string;
  price: number;
  tax: number;
  timePeriods: Array<object>;
  [val: string]: any;
}
export interface IMenuData {
  [val: string]: IMenuItem;
}
export interface IAppState {
  menu: IMenuData;
}

class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      menu: menuData,
    };
  }

  changeValues = (value: string, name: string, itemId: string) => {
    const { menu } = this.state;
    let tempMenu: IMenuData = { ...menu };
    tempMenu[itemId][name] = value;
    this.setState({ menu: tempMenu });
    console.log("New Menu: ", tempMenu);
  };

  render() {
    const { menu } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/:itemId"
            render={() => (
              <ProductDetail data={menu} changeHandler={this.changeValues} />
            )}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
