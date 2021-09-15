import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Save, Delete } from "@material-ui/icons/";
import {
  ButtonGroup,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
  },
});

function ButtonStyled() {
  const classes = useStyle();

  return <Button className={classes.root}>Styled btn</Button>;
}
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled color="primary" />
          <TextField
            variant="outlined"
            type="email"
            placeholder="test@test@gmail.com"
          />

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
    </ThemeProvider>
  );
}

export default App;
