import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaShare } from 'react-icons/fa';

const GalleryItem = ({ item, image }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4 ">
      <div className="card galleryitem">
        <img src={image || item.image} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-link">
              <FaHeart /> Like
            </button>
            <button className="btn-secondary btn-link">
              <FaShare /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
};

export default GalleryItem;
