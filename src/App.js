import TextEditor from './components/TextEditor'
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';




function App() {  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<TextEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
