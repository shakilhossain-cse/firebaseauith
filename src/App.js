import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';


function App() {
  
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Main/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
