import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { categories, galleryItems } from '../data/galleryData';
import GalleryItem from '../components/GalleryItem';


const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    // const [userImages, setUserImages] = useState([]);
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [category, setCategory] = useState("");


    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const filteredGalleryItems = galleryItems.filter((item) => {
      if (activeCategory === 'all') {
        return true;
      } else {
        return item.category === activeCategory.toLowerCase();
      }
    });

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         setUserImages((prevImages) => [
    //             ...prevImages,
    //             {
    //                 id: Date.now(),
    //                 title: title,
    //                 category: category,
    //                 description: description,
    //                 image: reader.result,
    //             },
    //         ]);
    //     };
    //     reader.readAsDataURL(file);
    //     setCategory("");
    //     setTitle("");
    //     setDescription("");
    // };

    // const handleImageUpdate = (index, field, value) => {
    //     setUserImages((prevImages) => {
    //         const updatedImages = [...prevImages];
    //         updatedImages[index][field] = value;
    //         return updatedImages;
    //     });
    // };

    // const handleImageDelete = (index) => {
    //     setUserImages((prevImages) => {
    //         const updatedImages = [...prevImages];
    //         updatedImages.splice(index, 1);
    //         return updatedImages;
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Do something with userImages, e.g. submit to a server or store in local storage
    // };


    return (
        <Container className="py-5">
          <h1 className="text-center mb-5">Gallery</h1>
          {/* <CarouselPage /> */}
          <p className="lead text-center py-4">
            Welcome to our gallery, where we showcase some of the beautiful sights
            and events of our village.
          </p>
          <div className="d-flex justify-content-center mb-3">
            <div className="btn-group">
              <button
                type="button"
                className={`btn btn-outline-primary ${
                  activeCategory === "all" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("all")}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`btn btn-outline-primary ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="d-flex row row-cols-1 row-cols-md-3 g-4 align-self-stretch">
          {filteredGalleryItems.length > 0 ? (
            filteredGalleryItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))
          ) : (
            <p>No data to display for selected category</p>
          )}
              
            {/* {userImages.map((image, index) => (
              <GalleryItem key={index} item={image} />
            ))} */}
          </div>

          {/* <div className="d-flex justify-content-center mt-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Choose...</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  id="image"
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          </div> */}
        </Container>
      );
      
};

export default Gallery;
