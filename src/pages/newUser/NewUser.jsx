import './newUser.css';

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUser__title'>New User</h1>
      <form className='newUser__form'>
        <div className='newUser__item'>
          <label>Username</label>
          <input type='text' placeholder='John' />
        </div>
        <div className='newUser__item'>
          <label>Full Name</label>
          <input type='text' placeholder='John Smith' />
        </div>
        <div className='newUser__item'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newUser__item'>
          <label>Password</label>
          <input type='password' placeholder='Password' />
        </div>
        <div className='newUser__item'>
          <label>Phone</label>
          <input type='text' placeholder='+52 646 123 4567' />
        </div>
        <div className='newUser__item'>
          <label>Address</label>
          <input type='text' placeholder='New York | USA' />
        </div>
        <div className='newUser__item'>
          <label>Gender</label>
          <div className='newUser__gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newUser__item'>
          <label>Active</label>
          <select name='active' id='active' className='newUser__select'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUser__btn'>Create</button>
      </form>
    </div>
  );
}
