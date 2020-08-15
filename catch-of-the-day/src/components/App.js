import React from "react";
import Header from "../components/Header";
import Inventory from "../components/Inventory";
import Order from "../components/Order";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
