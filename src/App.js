import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "components";
import "./sass/main.scss";
import { Example, Home } from "pages";
import { Provider } from "react-redux";
import { store } from "redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/example" component={Example} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
