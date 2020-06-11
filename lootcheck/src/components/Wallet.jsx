import React, { Component } from "react";
import { connect } from "react-redux";

class WalletComponent extends Component {
  render() {
    return (
      <div>
        <h3 className={"balance"}>Wallet balance: {this.props.balance}</h3>
      </div>
    );
  }
}

const mapStateToProps = ({ balance }, ownProps) => {
  return { balance };
};

const Wallet = connect(mapStateToProps)(WalletComponent);

export { WalletComponent, Wallet };
