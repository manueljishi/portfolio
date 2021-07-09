import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages';


function App() {
  return (
    <Router>
      <Landing/>
    </Router>
  );
}

export default App;
