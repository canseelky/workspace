import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import PostDetail from "../screens/PostDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" exact>
        <Home />
      </Route>
      <Route path="/explore">
        <Posts />
      </Route>

      <Route path="/post-detail/:id">
        <PostDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
