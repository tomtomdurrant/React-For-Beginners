import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };

  /**
   * @param {Event} event
   */
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    // Update the fish
    // Take a copy of the current fish
    const updatedFish = {
      ...this.props.fishes,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fishes.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fishes.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fishes.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>

        <textarea
          type="text"
          name="desc"
          placeholder="Description"
          onChange={this.handleChange}
          value={this.props.fishes.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fishes.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}
