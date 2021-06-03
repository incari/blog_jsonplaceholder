import Home from "pages/Home";
import Blog from "pages/Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "pages/DetailPage";
import UserPage from "pages/UserPage";
import Navbar from "components/Navbar";
import Config from "pages/Config";
import TopNavbar from "components/TopNavbar";
import { LoginContext } from "context/LoginContext";

function App() {
  return (
    <LoginContext>
      <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/post/:id" component={DetailPage}></Route>
          <Route exact path="/user/:userId" component={UserPage}></Route>
          <Route exact path="/config" component={Config}></Route>
        </Switch>
        <Navbar />
      </Router>
    </LoginContext>
  );
}

export default App;
