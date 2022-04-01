import {
  AttachMoney,
  BarChart,
  BusinessCenter,
  Feedback,
  LineStyle,
  Mail,
  Message,
  Person,
  Report,
  Store,
  Timeline,
  TrendingUp
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Dashboard</h3>
          <ul className='sidebar__list'>
            <Link to='/'>
              <li className='sidebar__list-item active'>
                <LineStyle className='sidebar__icon' /> Home
              </li>
            </Link>
            <li className='sidebar__list-item'>
              <Timeline className='sidebar__icon' /> Analytics
            </li>
            <li className='sidebar__list-item'>
              <TrendingUp className='sidebar__icon' /> Sales
            </li>
          </ul>
        </div>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Quick menu</h3>
          <ul className='sidebar__list'>
            <Link to='/users'>
              <li className='sidebar__list-item'>
                <Person className='sidebar__icon' /> Users
              </li>
            </Link>
            <Link to='/products'>
              <li className='sidebar__list-item'>
                <Store className='sidebar__icon' /> Products
              </li>
            </Link>
            <li className='sidebar__list-item'>
              <AttachMoney className='sidebar__icon' /> Transactions
            </li>
            <li className='sidebar__list-item'>
              <BarChart className='sidebar__icon' /> Reports
            </li>
          </ul>
        </div>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Notifications</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <Mail className='sidebar__icon' /> Mail
            </li>
            <li className='sidebar__list-item'>
              <Feedback className='sidebar__icon' /> Feedback
            </li>
            <li className='sidebar__list-item'>
              <Message className='sidebar__icon' /> Messages
            </li>
          </ul>
        </div>
        <div className='sidebar__menu'>
          <h3 className='sidebar__title'>Staff</h3>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <BusinessCenter className='sidebar__icon' /> Manage
            </li>
            <li className='sidebar__list-item'>
              <Timeline className='sidebar__icon' /> Analytics
            </li>
            <li className='sidebar__list-item'>
              <Report className='sidebar__icon' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
