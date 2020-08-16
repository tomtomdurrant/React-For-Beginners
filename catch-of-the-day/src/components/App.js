import React from "react";
import Header from "../components/Header";
import Inventory from "../components/Inventory";
import Order from "../components/Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // Take a copy of the state
    const fishes = { ...this.state.fishes };
    // Add new fish to that new variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    // In es6 if your property and value are the same name
    // You can just pass in the one name
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // Take a copy of state
    const order = { ...this.state.order };
    // Either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
