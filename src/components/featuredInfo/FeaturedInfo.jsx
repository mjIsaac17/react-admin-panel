import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredInfo.css';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featured-title'>Revanue</span>
        <div className='featured-money-container'>
          <span className='featured-money'>$3,452</span>
          <span className='featured-money-rate'>
            -11.4 <ArrowDownward className='featured-icon negative' />
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Sales</span>
        <div className='featured-money-container'>
          <span className='featured-money'>$35,452</span>
          <span className='featured-money-rate'>
            -1.4 <ArrowDownward className='featured-icon negative' />
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Cost</span>
        <div className='featured-money-container'>
          <span className='featured-money'>$9,952</span>
          <span className='featured-money-rate'>
            +11.4 <ArrowUpward className='featured-icon' />
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
    </div>
  );
}
