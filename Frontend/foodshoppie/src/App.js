import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import "./App.css"
import Home from "./Component/Home.js"
import Cart from "./Component/Cart.js"
import Pizza from "./Component/Pizza.js"
import Burger from "./Component/Burger.js"

function App() {
  const [parentdata, setdata] = useState([]);
  useEffect(() => {
    loadData();
    loadCart();
  }, [])

  const [cart, setcart] = useState([]);

  function orderNow(value) {
    const additem = {
      name: value.name,
      price: value.price,
      description: value.description,
      image: value.image
    }
    axios.post('/addtocart', additem)
    loadCart();
  }

  function loadData() {
    axios.get('/data').then((res) => {
      setdata(res.data.results);
      console.log(res.data.results)
    });
  }

  function loadCart() {
    axios.get('/cart').then((res) => {
      setcart(res.data)
    })
  }

  function deleteCartItem(value) {
    const data = {
      _id: value._id
    }
    axios.delete('/deletecartitem', { data })
    loadCart();
  }

  function deleteAll() {
    axios.delete('/clearcart')
    loadCart();
  }

  return (
    <Router>
      <div className="header">
        <NavLink className="allink homelink" to="/">Food Ordering Portal</NavLink>
        <NavLink className="allink cartlink" to="/cart"><i className="fa">&#xf07a;</i> ({cart.length})</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={() => <Home fetchdata={parentdata} />} />
        <Route exact path="/cart" component={() => <Cart cartdata={cart} deleteItem={deleteCartItem} clearCart={deleteAll} />} />
        <Route exact path="/pizza" component={() => <Pizza fetchdata={parentdata} addprop={orderNow} />} />
        <Route exact path="/burger" component={() => <Burger fetchdata={parentdata} addprop={orderNow} />} />
      </Switch>
    </Router>
  );
}

export default App;
