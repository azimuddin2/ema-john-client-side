import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='max-width'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
