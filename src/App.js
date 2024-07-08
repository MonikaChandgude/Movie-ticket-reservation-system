import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Register from './components/Registration';

function App() {
  return (
    <div className="App">
       <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    
    </Router>
    {/* <Navbar/>
    <Home/> */}
    </div>
  );
}

export default App;
