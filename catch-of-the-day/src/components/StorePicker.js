import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // Stop form from submit
    event.preventDefault();
    // Get text from input
    const store = this.myInput.current.value;
    // Change the page to /store/entry
    this.props.history.push(`store/${store}`);
    console.log("Going to store");
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;
