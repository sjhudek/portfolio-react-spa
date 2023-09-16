import logo from './logo.svg';
import './App.scss';
import { Route } from 'express';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
