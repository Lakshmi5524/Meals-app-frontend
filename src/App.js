import Home from './pages/Home'
import './App.css';
import AppNavbar from './components/Navbar'
import Appcontext from './constext'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import ErrorPage from './pages/404/404'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

console.log(Signup);
function App() {
  return (
    <BrowserRouter>
      <Appcontext>
        <div className="app">
          <AppNavbar />

          <Switch>
            <Route exact path="/">
            <Home />
            </Route>

            <Route exact path="/login">
            <Login />
            </Route>

            <Route  exact path="/signup">
             <Signup />
            </Route>
            
            <Route>
             <ErrorPage/>
            </Route>
          </Switch>
        </div>
      </Appcontext>
    </BrowserRouter>
  );
}

export default App;
