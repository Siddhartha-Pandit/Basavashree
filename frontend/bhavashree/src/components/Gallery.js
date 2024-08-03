import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Ensure this path is correct

// Import images from src/images
import DirListImage from "../images/Dir_list.jpg";
import Dir1Image from "../images/Dir1.jpg";
import Dir2Image from "../images/Dir2.jpg";
import OpeningImage from "../images/opening.jpg";
import Opening1Image from "../images/opening1.jpg";
import Independence1Image from "../images/independence1.jpg";
import Independence2Image from "../images/independence2.jpg";
import Independence3Image from "../images/independence3.jpg";

const images = [
  { src: DirListImage, alt: "Director list" },
  { src: Dir1Image, alt: "Directors" },
  { src: Dir2Image, alt: "Directors" },
  { src: OpeningImage, alt: "Opening ceremony" },
  { src: Opening1Image, alt: "Opening ceremony" },
  { src: Independence1Image, alt: "Independence day" },
  { src: Independence2Image, alt: "Independence day" },
  { src: Independence3Image, alt: "Independence day" },
];

function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="gallery">
      <h1>Our Photo Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default Gallery;
