import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Editor from './Pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/editor" component={Editor}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
