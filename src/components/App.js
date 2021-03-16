import React, { Component } from "react";
import Searchbar from "./Searchbar";
// import ImageGallery from "./ImageGallery";
// import Button from "./Button";
import Modal from "./Modal";

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
    showModal: false,
  };
  togglModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { images, isLoading, showModal, modalImage, alt, error } = this.state;
    return (
      <>
        <Searchbar />
        {showModal && (
          <Modal onClose={this.toggleModal} src={modalImage} alt={alt}></Modal>
        )}
      </>
    );
  }
}

export default App;
