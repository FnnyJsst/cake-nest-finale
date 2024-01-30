import './App.css'
import LoginPage from './components/LoginPage'
import OrderPage from './components/OrderPage'
import ErrorPage from './components/ErrorPage'
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  )
}

export default App
