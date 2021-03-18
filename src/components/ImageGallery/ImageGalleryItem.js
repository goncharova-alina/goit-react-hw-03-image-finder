import React from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";

function ImageGalleryItem({ tags, src, dataLargeImg, openModal }) {
  return (
    <li className="ImageGalleryItem" onClick={openModal}>
      <img
        src={src}
        alt={tags}
        data-largeimg={dataLargeImg}
        className="GalleryItemImage"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  dataLargeImg: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
