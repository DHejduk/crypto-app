import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Nav,
  HomePage,
  CryptoCurrencies,
  News,
  CryptoCurrencyDetails,
} from "./components";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {

  console.log(process.env.APP_KEY)
  return (
    <div className="app">
      <div className="navbar">
        <Nav />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/cryptocurrencies">
              <CryptoCurrencies />
              </Route>
              <Route exact path="/cryptocurrencydetails/:coinId">
                <CryptoCurrencyDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto app
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Currencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
