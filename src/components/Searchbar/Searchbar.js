import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Searchbar.css";

export default class Searchbar extends Component {
  state = {
    query: "",
  };
  handleQueryChange = (event) => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleQuerySubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;

    if (query.trim() === "") {
      return toast.error("введите запрос");
    }

    this.props.onSubmit(query);

    this.setState({ query: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleQuerySubmit}>
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel"></span>
          </button>

          <input
            className="SearchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
