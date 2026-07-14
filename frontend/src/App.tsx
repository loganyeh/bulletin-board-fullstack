import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import MainBoard from './pages/MainBoard/MainBoard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainBoard />} />  
      </Routes>

    </>
  )
}

export default App
