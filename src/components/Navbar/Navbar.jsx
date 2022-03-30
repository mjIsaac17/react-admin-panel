import { Language, Notifications, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__top-left'>
          <Link to='/'>
            <span className='logo'>Admin Panel</span>
          </Link>
        </div>
        <div className='navbar__top-right'>
          <div className='navbar__icon-container'>
            <Notifications />
            <span className='icon-badge'>2</span>
          </div>
          <div className='navbar__icon-container'>
            <Language />
          </div>
          <div className='navbar__icon-container'>
            <Settings />
          </div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PyEq6U1Yk4w04ZBuOGOUNdmuUG0_TUR9k2rC0bTkZGk7fNLaidmJkMayGVxorRFaKc8&usqp=CAU'
            alt='avatar'
            className='avatar'
          />
        </div>
      </div>
    </div>
  );
}
