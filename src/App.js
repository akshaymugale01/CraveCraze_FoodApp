
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Home from './screens/Home';
import Login from "./screens/Login";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./components/ContextReducer";
import Cart from "./screens/Cart";
import MyOrder from "./screens/MyOrder";


function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <ToastContainer class="custom-toast-container"/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createuser" element={<Signup />} />
        <Route exact path="/myOrder" element={<MyOrder />} />
      </Routes>
    </div>
  </Router>
  </CartProvider>
  );
}

export default App;
