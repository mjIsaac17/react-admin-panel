import { Visibility } from '@mui/icons-material';
import './widgetSmall.css';

export default function WidgetSmall() {
  return (
    <div className='widget-small'>
      <span className='widget-small__title'>New join members</span>
      <ul className='widget-small__list'>
        <li className='widget-small__list-item'>
          <img
            src='https://i.pinimg.com/236x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg'
            alt=''
            className='widget-small__img'
          />
          <div className='widget-small__user'>
            <span className='widget-small__username'>Mary Wayne</span>
            <span className='widget-small__user-title'>Web developer</span>
          </div>
          <button className='widget-small__btn'>
            <Visibility className='widget-small__icon' />
            Display
          </button>
        </li>
        <li className='widget-small__list-item'>
          <img
            src='https://i.pinimg.com/236x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg'
            alt=''
            className='widget-small__img'
          />
          <div className='widget-small__user'>
            <span className='widget-small__username'>Mary Wayne</span>
            <span className='widget-small__user-title'>Web developer</span>
          </div>
          <button className='widget-small__btn'>
            <Visibility className='widget-small__icon' />
            Display
          </button>
        </li>
        <li className='widget-small__list-item'>
          <img
            src='https://i.pinimg.com/236x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg'
            alt=''
            className='widget-small__img'
          />
          <div className='widget-small__user'>
            <span className='widget-small__username'>Mary Wayne</span>
            <span className='widget-small__user-title'>Web developer</span>
          </div>
          <button className='widget-small__btn'>
            <Visibility className='widget-small__icon' />
            Display
          </button>
        </li>
        <li className='widget-small__list-item'>
          <img
            src='https://i.pinimg.com/236x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg'
            alt=''
            className='widget-small__img'
          />
          <div className='widget-small__user'>
            <span className='widget-small__username'>Mary Wayne</span>
            <span className='widget-small__user-title'>Web developer</span>
          </div>
          <button className='widget-small__btn'>
            <Visibility className='widget-small__icon' />
            Display
          </button>
        </li>
        <li className='widget-small__list-item'>
          <img
            src='https://i.pinimg.com/236x/36/d0/86/36d086ed4cbbbc2548bc39953d8d575a--medium-instagram.jpg'
            alt=''
            className='widget-small__img'
          />
          <div className='widget-small__user'>
            <span className='widget-small__username'>Mary Wayne</span>
            <span className='widget-small__user-title'>Web developer</span>
          </div>
          <button className='widget-small__btn'>
            <Visibility className='widget-small__icon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
