import TextEditor from './components/TextEditor'
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  )
}

export default App;
