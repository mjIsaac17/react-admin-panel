import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './chart.css';

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 2}>
        <LineChart data={data}>
          <XAxis dataKey={dataKey} stroke='#5550bd' />
          <YAxis stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#c3c3c3' strokeDasharray='5 5' />}
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
