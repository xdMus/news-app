import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "antd";
import CreatePage from "./pages/CreatePage/CreatePage";
import HomePage from "./pages/HomePage/HomePage";
import AppHeader from "./components/ui-kit/Layout/AppHeader";
import AppContent from "./components/ui-kit/Layout/AppContent";
import AppFooter from "./components/ui-kit/Layout/AppFooter";

import "./App.css";

function App() {
  return (
    <Layout>
      <Router>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route path="/admin/create">
              <CreatePage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </AppContent>
        <AppFooter>Footer content</AppFooter>
      </Router>
    </Layout>
  );
}

export default App;
