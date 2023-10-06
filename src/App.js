import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
  return (
    <div className='main'>
      <section className='container'>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </div>
  );
}

export default App;
