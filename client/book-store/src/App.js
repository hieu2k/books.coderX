import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import TopMenu from "./components/TopMenu";
import BooksPage from "./pages/books";
import HomePage from "./components/Home";
import CartPage from './pages/cart';
import { BookProvider } from "./contexts/ProviderContext";

export default function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
          <div className="Header">
            <div className="menu">
              <TopMenu />
            </div>
          </div>
          <Switch>
          <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </BookProvider>
  );
}

function Home() {
  return (
    <HomePage />
  );
}

function Books() {
  return (
    <BooksPage />
  );
}

function Cart() {
  return (
    <CartPage />
  );
}
