import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FetchedItemDetails from "./Components/FetchedItemDetails/FetchedItemDetails";
import FetchedItemsList from "./Components/FetchedItemsList/FetchedItemsList";
import PokemonList from "./Components/PokemonList/PokemonList";
import Header from "./Components/Header/Header";
import { FetchedItemProvider } from "./context/FetchedItemsContext";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navBar">
            <ul className="nav-list">
              <li>
                <Link to="/pokemon">
                  <img
                    className="oo-loo-logo"
                    src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png"
                    alt="Oompa Loompa Crew Logo"
                  />
                </Link>
                <Link to="/">
                  <span className="nav-title">OOMPA LOOMPA CREW</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/pokemon/:name">
              <FetchedItemProvider>
                <PokemonDetails />
              </FetchedItemProvider>
            </Route>
            <Route path="/pokemon">
              <FetchedItemProvider>
                <Header />
                <PokemonList />
              </FetchedItemProvider>
            </Route>
            <Route path="/:id">
              <FetchedItemProvider>
                <FetchedItemDetails />
              </FetchedItemProvider>
            </Route>
            <Route path="/">
              <FetchedItemProvider>
                <Header />
                <FetchedItemsList />
              </FetchedItemProvider>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
