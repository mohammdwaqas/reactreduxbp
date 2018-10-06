import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Button } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    project: "",
    status: true
  };

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSwitchChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };
  handleClick = () => {
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <form className={classes.container} noValidate autoComplete="on">
          {/* <Switch
            checked={this.state.checkedA}
            onChange={this.handleSwitchChange("checkedA")}
            value="checkedA"
          /> */}

          <TextField
            id="outlined-name"
            label="Client Full Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleTextChange("name")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-project"
            label="Project Name / Site Name"
            className={classes.textField}
            value={this.state.project}
            onChange={this.handleTextChange("project")}
            margin="normal"
            variant="outlined"
          />
        </form>

        <p>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleSwitchChange("status")}
                value="checkedA"
              />
            }
            label="Client Status"
          />
        </p>

        <Button
          variant="contained"
          color="primary"
          style={style.button}
          onClick={this.handleClick}
        >
          Register new Client
        </Button>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};
let style = {
  button: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "green",
    marginLeft: 20
  }
};
export default withStyles(styles)(OutlinedTextFields);
