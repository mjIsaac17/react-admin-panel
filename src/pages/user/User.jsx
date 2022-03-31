import {
  CalendarToday,
  Email,
  LocationCity,
  PermIdentity,
  PhoneAndroid,
  Publish
} from '@mui/icons-material';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='user-title-container'>
        <h1 className='user-title'>Edit user</h1>
        <button className='user-add-btn'>Create</button>
      </div>
      <div className='user-container'>
        <div className='user-show'>
          <div className='user-show__top'>
            <img
              src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
              alt=''
              className='user-show__img'
            />
            <div className='user-show__top-title'>
              <span className='user-show__username'>Anna Becker</span>
              <span className='user-show__user-title'>Software Engineer</span>
            </div>
          </div>
          <div className='user-show__bottom'>
            <span className='user-show__title'>Account details</span>
            <div className='user-show__info'>
              <PermIdentity />
              <span className='user-show__info-title'>annabeck98</span>
            </div>
            <div className='user-show__info'>
              <CalendarToday />
              <span className='user-show__info-title'>10.12.1998</span>
            </div>
            <span className='user-show__title'>Contact details</span>
            <div className='user-show__info'>
              <PhoneAndroid />
              <span className='user-show__info-title'>+62 123 4567</span>
            </div>
            <div className='user-show__info'>
              <Email />
              <span className='user-show__info-title'>
                annabeck77@gmail.com
              </span>
            </div>
            <div className='user-show__info'>
              <LocationCity />
              <span className='user-show__info-title'>New York | USA</span>
            </div>
          </div>
        </div>
        <div className='user-update'>
          <span className='user-update__title'>Edit</span>
          <form className='user-update__form'>
            <div className='user-update__left'>
              <div className='user-update__item'>
                <label>Username</label>
                <input
                  type='text'
                  className='user-update__input'
                  placeholder='annabeck98'
                />
              </div>
              <div className='user-update__item'>
                <label>Full name</label>
                <input
                  type='text'
                  className='user-update__input'
                  placeholder='Anna Becker'
                />
              </div>
              <div className='user-update__item'>
                <label>Email</label>
                <input
                  type='text'
                  className='user-update__input'
                  placeholder='annabeck98@gmail.com'
                />
                <div className='user-update__item'>
                  <label>Phone</label>
                  <input
                    type='text'
                    className='user-update__input'
                    placeholder='+62 123 4567'
                  />
                </div>
                <div className='user-update__item'>
                  <label>Address</label>
                  <input
                    type='text'
                    className='user-update__input'
                    placeholder='New York | USA'
                  />
                </div>
              </div>
            </div>
            <div className='user-update__right'>
              <div className='user-update__upload'>
                <img
                  src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
                  alt=''
                  className='user-update__img'
                />
                <label htmlFor='file'>
                  <Publish className='user-update__icon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='user-update__btn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
