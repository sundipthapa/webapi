import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>

        {/* Create register route */}

        <Route path ='/register' element={<Registerpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
