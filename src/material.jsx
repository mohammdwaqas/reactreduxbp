import React, { Component } from "react";
import { Button } from "@material-ui/core";
import SimpleModal from "./modal";
import ButtonAppBar from "./MenuBar";
import ScrollableTabsButtonForce from "./Navigation";

class MaterialUI extends Component {
  handlePress = () => {
    // alert("Button Pressed.");
  };
  state = {};
  render() {
    return (
      <div>
        <ButtonAppBar />
        <ScrollableTabsButtonForce />

        {/* <Button variant="raised" color="primary" onClick={this.handlePress}>
          Press Me
        </Button>
        <SimpleModal
          modalTitle="Are you sure you want to continue?"
          btnTitle="Expense Form"
        /> */}
      </div>
    );
  }
}

export default MaterialUI;
