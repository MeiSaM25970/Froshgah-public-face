import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Page from "./component/pageTitle/pageTitle";

import { HomePage, Weblogs } from "./pages/";
import { ErrorPage2 } from "./pages/ErrorPage2";
import LoadingPage from "./pages/Loading";
import { ProductsPage } from "./pages/products";
import { LoadPage } from "./component/loadPage";
import { FooterBottom, FooterTop } from "./component/footer";
import { NavBar } from "./component/Navbar/navbar";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { TrackingPage } from "./pages/tarckingPage";
import { CategoriesBlogs } from "./pages/categories";
import { SingleBlogPage } from "./pages/singleBlog";

function App() {
  const navFoot = () => {
    if (window.location.pathname === "/error") {
      return false;
    } else if (window.location.pathname === "/loading") {
      return false;
    } else {
      return true;
    }
  };
  const showNavFoot = navFoot();
  return (
    <div className="App">
      <BrowserRouter>
        <LoadPage />
        {showNavFoot ? <NavBar /> : ""}
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
            path="/weblogs"
            exact
            render={(props) => (
              <Page title="مقالات">
                <Weblogs {...props} />
              </Page>
            )}
          />
          <Route
            path="/weblogs/category/:id"
            exact
            render={(props) => (
              <Page title="مقالات">
                <CategoriesBlogs {...props} />
              </Page>
            )}
          />
          <Route
            path="/products/:id"
            exact
            render={(props) => (
              <Page title="صفحه محصولات">
                <ProductsPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/tracking"
            exact
            render={(props) => (
              <Page title="صفحه محصولات">
                <TrackingPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/singleBlog/:id"
            exact
            render={(props) => (
              <Page title="مقالات">
                <SingleBlogPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/contact"
            exact
            render={(props) => (
              <Page title="تماس  با ما">
                <ContactPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/about"
            exact
            render={(props) => (
              <Page title="درباره ما">
                <AboutPage {...props} />
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
          <Redirect to="/" />
        </Switch>
        {showNavFoot ? <FooterTop /> : ""}
        {showNavFoot ? <FooterBottom /> : ""}
      </BrowserRouter>
    </div>
  );
}

export default App;
