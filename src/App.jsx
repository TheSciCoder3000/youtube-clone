import './App.css';
import Header from './Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Recommended from './Components/Recommended/Recommended'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__viewer">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
