import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

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
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
