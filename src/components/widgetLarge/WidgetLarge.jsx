import './widgetLarge.css';

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={`widget-large__btn ${type}`}>{type}</button>;
  };
  return (
    <div className='widget-large'>
      <h3 className='widget-large__title'>Latest transactions</h3>
      <table className='widget-large__table'>
        <thead>
          <tr className='widget-large__tr'>
            <th className='widget-large__th'>Customer</th>
            <th className='widget-large__th'>Date</th>
            <th className='widget-large__th'>Amount</th>
            <th className='widget-large__th'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='widget-large__tr'>
            <td className='widget-large__user'>
              <img
                src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
                alt=''
                className='widget-large__img'
              />
              <span className='widget-large__name'>Susan Carol</span>
            </td>
            <td className='widget-large__date'>2 Sep 2021</td>
            <td className='widget-large__amount'>$122.00</td>
            <td className='widget-large__status'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='widget-large__tr'>
            <td className='widget-large__user'>
              <img
                src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
                alt=''
                className='widget-large__img'
              />
              <span className='widget-large__name'>Susan Carol</span>
            </td>
            <td className='widget-large__date'>2 Sep 2021</td>
            <td className='widget-large__amount'>$122.00</td>
            <td className='widget-large__status'>
              <Button type='Declined' />
            </td>
          </tr>
          <tr className='widget-large__tr'>
            <td className='widget-large__user'>
              <img
                src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
                alt=''
                className='widget-large__img'
              />
              <span className='widget-large__name'>Susan Carol</span>
            </td>
            <td className='widget-large__date'>2 Sep 2021</td>
            <td className='widget-large__amount'>$122.00</td>
            <td className='widget-large__status'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr className='widget-large__tr'>
            <td className='widget-large__user'>
              <img
                src='https://i.pinimg.com/236x/3d/f2/7b/3df27be797526ddea96a2d49c04e35da.jpg'
                alt=''
                className='widget-large__img'
              />
              <span className='widget-large__name'>Susan Carol</span>
            </td>
            <td className='widget-large__date'>2 Sep 2021</td>
            <td className='widget-large__amount'>$122.00</td>
            <td className='widget-large__status'>
              <Button type='Approved' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
