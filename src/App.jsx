import './App.css'
import LoginPage from './components/LoginPage'
import OrderPage from './components/OrderPage'
import ErrorPage from './components/ErrorPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminProvider } from './components/admin/AdminContext';



function App() {

  return (
    
      <AdminProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </AdminProvider>
    
  )
}

export default App
