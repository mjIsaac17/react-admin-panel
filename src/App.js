import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';
import Product from './pages/product/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/user/create' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/product/create' element={<NewProduct />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
