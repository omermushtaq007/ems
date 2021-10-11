import React, { Component } from "react";
import {
  Button,
  Heading,
  Modal,
  FormLayout,
  TextField,
} from "@shopify/polaris";
export default class AddEmp extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: "", email: "", designation: "" };
  }

  render() {
    return (
      <>
        <Button
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          Add Employee
        </Button>
        <Modal
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
          title="Add Employee Form"
          primaryAction={{
            content: "Add",
            onAction: () => {
              console.log(this.state.name);
            },
          }}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: () => {
                this.setState({ open: false });
              },
            },
          ]}
        >
          <Modal.Section>
            <Heading>Shopify app with Node and React 🎉</Heading>
            <FormLayout>
              <TextField
                label="Item name"
                value={this.state.name}
                onChange={(value) => {
                  this.setState({ name: value });
                }}
                autoComplete="off"
              />
              <TextField
                type="email"
                label="Account email"
                value={this.state.email}
                onChange={(value) => {
                  this.setState({ email: value });
                }}
                autoComplete="email"
              />
              <TextField
                type="text"
                label="Designation"
                value={this.state.designation}
                onChange={(value) => {
                  this.setState({ designation: value });
                }}
                autoComplete="off"
              />
            </FormLayout>
          </Modal.Section>
        </Modal>
      </>
    );
  }
}
