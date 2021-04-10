import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components"

const StyledInput = styled(TextField)`
  margin:15px 0;

`
const TextInput = (props) => {

  return (
    <StyledInput
      style={{background:"white"}}
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      variant={props.variant}
    />
  );
};

export default TextInput;
