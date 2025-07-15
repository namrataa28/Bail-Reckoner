import './App.css'// Importing Tailwind CSS for styling
import { Routes, Route ,Navigate} from 'react-router-dom'
import Login from './pages/login.jsx' // Importing the Login component
import Signup from './pages/signup.jsx' // Importing the Signup component

function App() {

  return (
    <>
    <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
