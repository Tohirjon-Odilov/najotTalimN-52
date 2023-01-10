import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends Component {
  render() {
    const movies = [
      { name: "Garri Potter", view: 999 },
      { name: "Jyul Vern", view: 256 },
      { name: "Mojizakor ayol", view: 487 },
    ];
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList />
          <MoviesAddForm />
        </div>
      </div>
    );
  }
}

export default App;
