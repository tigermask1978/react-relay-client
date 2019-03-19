import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: 30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

class AppBarComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar className={classes.toolbar}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                name="searchTerm"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                value={this.props.searchTerm}
                onChange={this.props.handleSearchInputChange}
              />
            </div>

            <Fab
              color="secondary"
              aria-label="Add"
              className={classes.fabButton}
              onClick={this.props.openBookItemDialog}
            >
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarComponent);
