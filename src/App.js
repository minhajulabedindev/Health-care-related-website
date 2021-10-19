import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbers from "./Components/Shared/Navber/Navber";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Services from "./Components/Services/Services";
import NotFounds from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Footer from "./Components/Shared/Footer/Footer";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Details from "./Components/Details/Details";
import Sucess from "./Components/Success/Sucess";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbers></Navbers>
          <p></p>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/success">
              <Sucess></Sucess>
            </PrivateRoute>
            <Route path="*">
              <NotFounds></NotFounds>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
