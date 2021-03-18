import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import imageApi from "../services/ImageApi";
import LoaderSpin from "./Loader/";
import "./App.css";

class App extends Component {
  state = {
    query: null,
    images: [],
    page: 1,
    isLoading: false,
    modalImage: null,
    alt: null,
    error: null,
    openModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImg();
    }
  }

  onSearch = (query) => {
    this.setState({ query, images: [], page: 1, error: null });
  };

  fetchImg = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    imageApi
      .fetchImages(query, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return this.setState({
            error: `Не удалось найти картинку по запросу ${query}`,
          });
        }
        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page,
        }));
      })
      .catch((error) => this.setState({ error: "Побробуйте снова" }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    this.scrolling();
  };

  scrolling = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 150,
        behavior: "smooth",
      });
    }, 1000);
  };

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({
      openModal: true,
      modalImage: e.target.dataset.largeimg,
      alt: e.target.alt,
    });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { images, isLoading, openModal, modalImage, alt, error } = this.state;
    return (
      <div className={App}>
        <Searchbar onSubmit={this.onSearch} />
        {isLoading && <LoaderSpin />}
        {images.length > 0 && !error && (
          <>
            <ImageGallery openModal={this.onOpenModal} images={images} />
            <Button fetchImages={this.onLoadMore} />
          </>
        )}
        {openModal && (
          <Modal onClose={this.closeModal} src={modalImage} alt={alt}></Modal>
        )}
      </div>
    );
  }
}

export default App;
