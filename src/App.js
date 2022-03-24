import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Sidebar />
        {/* <div className='others'>others</div> */}
      </div>
    </div>
  );
}

export default App;
