import React, { Component } from "react";
import { connect } from "react-redux";

import { deposit, withdraw } from "../actions/balance";

class WalletComponent extends Component {
  state = { balance: undefined };

  updateBalance = (event) => {
    this.setState({ balance: parseInt(event.target.value) });
  };

  deposit = () => {
    this.props.deposit(this.state.balance);
  };

  withdraw = () => {
    this.props.withdraw(this.state.balance);
  };

  render() {
    return (
      <div>
        <h3 className={"balance"}>Wallet balance: {this.props.balance}</h3>
        <input className={"input-wallet"} onChange={this.updateBalance} />
        <button className={"btn-deposit"} onClick={this.deposit}>
          Deposit
        </button>
        <button className={"btn-withdraw"} onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ balance }) => {
  return { balance };
};

const Wallet = connect(mapStateToProps, { deposit, withdraw })(WalletComponent);

export { WalletComponent, Wallet };
