import { Component } from "react";
import "./Searchbar.css";

export default class Searchbar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchFormButton">
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            className="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
