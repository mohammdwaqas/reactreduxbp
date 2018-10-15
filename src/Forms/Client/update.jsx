import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Button } from "@material-ui/core";
import EnhancedTable from "../../commons/Table/table";

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}
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

class UpdateClient extends React.Component {
  state = {
    name: "",
    project: "",
    rows: [
      {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Clients in System"
      },

      {
        id: "calories",
        numeric: true,
        disablePadding: false,
        label: "Calories"
      },
      { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
      { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
      {
        id: "protein",
        numeric: true,
        disablePadding: false,
        label: "Protein (g)"
      }
    ],
    data: [
      createData("Ashraf Sab", 0, 3.7, 67, 4.3),
      createData("Donut", 452, 25.0, 51, 4.9),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
      createData("Honeycomb", 408, 3.2, 87, 6.5),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Jelly Bean", 375, 0.0, 94, 0.0),
      createData("KitKat", 518, 26.0, 65, 7.0),
      createData("Lollipop", 392, 0.2, 98, 0.0),
      createData("Marshmallow", 318, 0, 81, 2.0),
      createData("Nougat", 360, 19.0, 9, 37.0),
      createData("Oreo", 437, 18.0, 63, 4.0)
    ]
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleClick = name => {
    // this.setState({
    //   project: name
    // });
    console.log(name);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
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

        <Button variant="contained" color="primary" style={style.button}>
          Update this client
        </Button>

        {/* SHOW PREVIOUS CLIENTS */}
        <EnhancedTable
          onPress={this.handleClick}
          data={this.state.data}
          rows={this.state.rows}
        />
      </div>
    );
  }
}

UpdateClient.propTypes = {
  classes: PropTypes.object.isRequired
};
let style = {
  button: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "blue",
    marginLeft: 20
  }
};
export default withStyles(styles)(UpdateClient);
