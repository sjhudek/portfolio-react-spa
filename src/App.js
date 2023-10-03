import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';  
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>
        {/* &lt;html&gt;<br />
          &lt;body&gt; */}
        </span>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
    </Routes>
    {/* <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>
          &lt;/html&gt;
          </span>
        </span> */}
      </div>
    </div>
  );
}

export default App;
