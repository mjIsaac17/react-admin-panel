import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { activeUserData } from '../../dummyData';
import './home.css';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={activeUserData} dataKey='name' grid title='User analytics' />
    </div>
  );
}
