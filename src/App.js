import logo from "./logo.svg";
import "./App.css";
import { Save, Delete } from "@material-ui/icons/";
import { ButtonGroup, Button, Checkbox } from "@material-ui/core";

function App() {
  function CheckBoxExample() {
    return <div>Test</div>;
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
