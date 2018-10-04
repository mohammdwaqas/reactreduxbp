import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import OutlinedTextFields from "../Client/register";
import UpdateClient from "../Client/update";
import DeleteClient from "../Client/delete";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {/* CREATE NEW CLIENT - STARTS HERE */}
          <TabContainer dir={theme.direction}>
            <div style={{ color: "green" }}>
              <h1>Create New Client</h1>
              <p>
                Use this page to create and Manage clients in system Use this
                page to create and Manage clients in system.
              </p>
              <OutlinedTextFields />
            </div>
          </TabContainer>
          {/* CREATE NEW CLIENT - ENDS HERE */}

          {/* UPDATE CLIENT - STARTS HERE */}
          <TabContainer dir={theme.direction}>
            <div style={{ color: "blue" }}>
              <h1>Update Existing Client</h1>
              <p>
                Use this page to Update and Manage clients in system Use this
                page to create and Manage clients in system.
              </p>
              <UpdateClient />
            </div>
          </TabContainer>
          {/* UPDATE CLIENT - ENDS HERE */}

          {/* DELETE CLIENT - STARTS HERE */}
          <TabContainer dir={theme.direction}>
            <div style={{ color: "red" }}>
              <h1>Delete Client</h1>
              <p>
                Use this page to Delete clients in system Use this page to
                create and Manage clients in system.
              </p>
              <DeleteClient />
            </div>
          </TabContainer>
          {/* DELETE CLIENT - ENDS HERE */}
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
