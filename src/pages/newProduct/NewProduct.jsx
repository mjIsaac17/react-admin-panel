import './newProduct.css';

export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className='newProduct__title'>New Product</h1>
      <form className='newProduct__form'>
        <div className='newProduct__item'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>
        <div className='newProduct__item'>
          <label>Name</label>
          <input type='text' placeholder='Bose airpods' />
        </div>
        <div className='newProduct__item'>
          <label>Stock</label>
          <select name='stock' id='stock' className='newProduct__select'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newProduct__item'>
          <label>Active</label>
          <select name='active' id='active' className='newProduct__select'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newProduct__item'>
          <label>Price</label>
          <input type='number' placeholder='123.10' />
        </div>
        <button className='newProduct__btn'>Create</button>
      </form>
    </div>
  );
}
