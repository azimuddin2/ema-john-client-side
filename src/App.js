import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>/
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
