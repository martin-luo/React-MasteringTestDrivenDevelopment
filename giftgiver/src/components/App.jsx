import React, { Component } from "react";

import { Gift } from "./Gift";

class App extends Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;

    const currentMaxID =
      gifts.length > 0 ? Math.max(...gifts.map(({ id }) => id)) : 0;

    this.setState({ gifts: [...gifts, { id: currentMaxID + 1 }] });
  };

  removeGift = (giftId) => {
    const gifts = this.state.gifts.filter(({ id }) => id !== giftId);

    this.setState({ gifts });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className={"gift-list"}>
          {this.state.gifts.map((gift) => (
            <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
          ))}
        </div>
        <button className={"btn-add"} onClick={this.addGift}>
          Add Gift
        </button>
      </div>
    );
  }
}

export { App };
