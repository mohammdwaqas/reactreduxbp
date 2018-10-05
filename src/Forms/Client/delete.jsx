import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Button } from "@material-ui/core";

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
    value: "01",
    label: "ASHRAF SAB"
  },
  {
    value: "02",
    label: "SHIBLEE COLLEGE"
  },
  {
    value: "03",
    label: "BOOTA SAB"
  },
  {
    value: "04",
    label: "CITY HOUSING"
  }
];

class DeleteClient extends React.Component {
  state = {
    name: "",
    project: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value="SHIBLEE COLLEGE"
          onChange={this.handleChange("currency")}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu
          //   }
          // }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <form className={classes.container} noValidate autoComplete="on">
          <TextField
            id="outlined-name"
            label="Client Full Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-project"
            label="Project Name / Site Name"
            className={classes.textField}
            value={this.state.project}
            onChange={this.handleChange("project")}
            margin="normal"
            variant="outlined"
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          style={style.button}
          onClick={this.handleClick}
        >
          Delete this client
        </Button>
      </div>
    );
  }
}

DeleteClient.propTypes = {
  classes: PropTypes.object.isRequired
};
let style = {
  button: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "red",
    marginLeft: 20
  }
};
export default withStyles(styles)(DeleteClient);
