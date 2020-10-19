import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page from "./component/pageTitle/pageTitle";

import { HomePage } from "./pages/";
import { ErrorPage2 } from "./pages/ErrorPage2";
import LoadingPage from "./pages/Loading";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Page title="صفحه اصلی">
                <HomePage {...props} />
              </Page>
            )}
          />
          <Route
            path="/error"
            exact
            render={(props) => (
              <Page title="خطا">
                <ErrorPage2 {...props} />
              </Page>
            )}
          />
          <Route
            path="/loading"
            exact
            render={(props) => (
              <Page title="خطا">
                <LoadingPage {...props} />
              </Page>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
