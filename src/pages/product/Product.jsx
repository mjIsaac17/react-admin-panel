import { Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import './product.css';

export default function Product() {
  return (
    <div className='product'>
      <div className='product__title-container'>
        <h1 className='product__title'>Product</h1>
        <Link to='/product/create'>
          <button className='product__add-btn'>Create</button>
        </Link>
      </div>
      <div className='product__top'>
        <div className='product__top__left'>
          <Chart
            title='Sales performance'
            data={productData}
            dataKey='Sales'
            grid
          />
        </div>
        <div className='product__top__right'>
          <div className='product__info__top'>
            <img
              src='https://m.media-amazon.com/images/I/61j9RdOsJwL._AC_SS450_.jpg'
              alt=''
              className='product__info__img'
            />
            <span className='product__name'>Bose Airpods</span>
          </div>
          <div className='product__info__bottom'>
            <div className='product__info__item'>
              <span className='product__info__key'>id:</span>
              <span className='product__info__value'>143</span>
            </div>
            <div className='product__info__item'>
              <span className='product__info__key'>sales:</span>
              <span className='product__info__value'>200</span>
            </div>
            <div className='product__info__item'>
              <span className='product__info__key'>active:</span>
              <span className='product__info__value'>yes</span>
            </div>
            <div className='product__info__item'>
              <span className='product__info__key'>in stock:</span>
              <span className='product__info__value'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product__bottom'>
        <form className='product__form'>
          <div className='product__form__left'>
            <label>Product Name</label>
            <input type='text' placeholder='Bose Airpod' />
            <label>In stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='product__form__right'>
            <div className='product__upload'>
              <img
                className='product__upload__img'
                src='https://m.media-amazon.com/images/I/61j9RdOsJwL._AC_SS450_.jpg'
                alt='Bose airpods'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='product__btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
