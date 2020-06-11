import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Button,
  FormControl,
  FormLabel,
} from "react-bootstrap";

class Gift extends Component {
  state = { person: "", present: "" };

  render() {
    const { removeGift, gift } = this.props;

    return (
      <div className={"gift"}>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className={"input-person"}
              onChange={({ target }) => this.setState({ person: target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className={"input-present"}
              onChange={({ target }) =>
                this.setState({ present: target.value })
              }
            />
          </FormGroup>
          <Button className={"btn-remove"} onClick={() => removeGift(gift.id)}>
            Remove Gift
          </Button>
        </Form>
      </div>
    );
  }
}

export { Gift };
