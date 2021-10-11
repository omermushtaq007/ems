import React, { Component } from "react";
import { List, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
export default class GetCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, list: false };
  }
  render() {
    return (
      <>
        <Page
          title="All Employees"
          primaryAction={{
            content: "Show Employees  ",
            onAction: () => {
              this.setState({ open: true });
            },
          }}
        >
          <ResourcePicker
            open={this.state.open}
            onSelection={(s) => {
              this.setState({ open: false, list: true });
            }}
            onCancel={() => {
              this.setState({ open: false });
            }}
            resourceType="Product"
          />
          <ul hidden={this.state.list}>
            <li>Apple</li>
          </ul>
        </Page>
      </>
    );
  }
}
