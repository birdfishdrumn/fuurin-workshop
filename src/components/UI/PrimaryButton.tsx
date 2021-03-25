import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#4dd0e1",
    color: "#fff",
    fontSize: 16,
    fontWeight:"bold",
    height: 48,
    marginButton: 20,
    width: 220,
    marginTop: 20,
  },
});
const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
        disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
