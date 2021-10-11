import React, { Component } from "react";
import { Page } from "@shopify/polaris";
import AddEmp from "./components/addEmp";
import GetCustomer from "./components/getCustomer";
export default class index extends Component {
  render() {
    return (
      <Page>
        <AddEmp />
        <GetCustomer />
      </Page>
    );
  }
}
