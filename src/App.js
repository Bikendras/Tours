import logo from './logo.svg';
import './App.css';
import Review from './Review';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
          <Route index element={<Review/>} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
