import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequiredAuth>
            <Products></Products>
          </RequiredAuth>
        }></Route>
        <Route path='/orders' element={
          //rape with <RequiredAuth> compo for protect order 
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
