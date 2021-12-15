import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

import './App.css';
import background from './background.jpg';

import Films from './views/Films/Films';
import Main from './views/Main/Main';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `URL(${background})` }}>
      <BrowserRouter>
        <header className="nav">
          <NavLink exact to="/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="characters-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="books-link">
            Books
          </NavLink>
        </header>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Films">
            <Films />
          </Route>
          <Route path="/Characters">
            <Characters />
          </Route>
          <Route path="/Books">
            <Books />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
