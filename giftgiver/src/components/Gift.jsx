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
    return (
      <div>
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
        </Form>
      </div>
    );
  }
}

export { Gift };
