import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink exact to="/films" data-testid="film-link">
            Films
          </NavLink>
        </header>

        <Switch>
          <Route path="/films">
            <Films />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
