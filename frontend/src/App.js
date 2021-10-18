import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";
import SideImage from "./Components/SideImage";

function App() {
  const [name, setName] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div id="authPage">
            <LoginPage name={name} setName={setName} />
            <SideImage />
          </div>
        </Route>
        <Route path="/main" exact>
          <div id="mainPage">
            <MainPage name={name} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
