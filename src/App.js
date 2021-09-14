import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Save, Delete } from "@material-ui/icons/";
import {
  ButtonGroup,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

function App() {
  const [checked, setChecked] = React.useState(true);
  function CheckBoxExample() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="testing CheckBox"
      />
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup variant="contained" size="large" color="secondary">
          <Button color="primary" startIcon={<Save />}>
            Hello from mui
          </Button>
          <Button endIcon={<Delete />}>Delete</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
