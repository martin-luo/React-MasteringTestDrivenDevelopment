import React, { Component } from "react";

class App extends Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;

    const currentMaxID = Math.max(gifts.map(({ id }) => id)) || 0;

    this.setState({ gifts: [...gifts, { id: currentMaxID + 1 }] });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <button className={"btn-add"} onClick={this.addGift}>
          Add Gift
        </button>
      </div>
    );
  }
}

export { App };
