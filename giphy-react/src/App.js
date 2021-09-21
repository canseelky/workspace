import "./App.css";
import Gifs from "./components/Gifs";
import { Route, Switch, Redirect } from "react-router-dom";
import GifDetail from "./components/GifDetail";
import Login from "./pages/Login";
import CategoryResult from "./components/CategoryResult";
import Reset from "./pages/Reset";
import Upload from "./pages/Upload";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-gifs">
            <Gifs />
          </Redirect>
        </Route>
        <Route path="/all-gifs">
          <Gifs />
        </Route>

        <Route path="/reset">
          <Reset />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/gif-detail/:gifId" exact>
          <GifDetail />
        </Route>
        <Route path="/category/:categoryName">
          <CategoryResult />
        </Route>
        <Route path="/forgot">
          <Reset />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
