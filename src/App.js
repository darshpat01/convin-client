import "./App.css";
import { Typography } from "antd";
import Navbar from "./Components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </div>
  );
}

export default App;
