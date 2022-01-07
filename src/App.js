import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
