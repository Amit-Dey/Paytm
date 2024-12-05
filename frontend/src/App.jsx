import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Send from './pages/Send'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
           <Dashboard />
          </PrivateRoute>
          } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/send" element={
          <PrivateRoute>  
            <Send />
          </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
