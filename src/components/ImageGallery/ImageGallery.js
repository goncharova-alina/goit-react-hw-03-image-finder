import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";
import "./ImageGallery.css";

function ImageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            src={webformatURL}
            dataLargeImg={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  openModal: PropTypes.func,
};
export default ImageGallery;
