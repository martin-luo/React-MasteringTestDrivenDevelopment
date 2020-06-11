import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { Gift } from "./Gift";
import { maxNumber } from "../helpers";

class App extends Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;

    this.setState({
      gifts: [...gifts, { id: maxNumber(gifts.map(({ id }) => id)) + 1 }],
    });
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
        <Button className={"btn-add"} onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export { App };
