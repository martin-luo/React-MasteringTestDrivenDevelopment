import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBitcoin } from "../actions/bitcoin";

class LootComponent extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin, balance } = this.props;

    if (!Object.keys(bitcoin).length) {
      return "";
    }

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);
  };

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}

const Loot = connect((state) => state, { fetchBitcoin })(LootComponent);

export { LootComponent, Loot };
