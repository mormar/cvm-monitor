import React from "react";
import GlobalStyle from "./Global";
import Header from "./layouts/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/:repository_name' component={Details}/>
        <Route component={Page404}/>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
