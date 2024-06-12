import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import { SelectedValuesProvider } from './context/components';
import WithoutLogin from './pages/withoutlogin';
function App() {
  const [count, setCount] = useState(0)

  return (
    <SelectedValuesProvider>
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/withoutlogin' element={<WithoutLogin />} />
      
      </Routes>
    </div>
      </BrowserRouter> 
      </SelectedValuesProvider> 
    )
}

export default App
