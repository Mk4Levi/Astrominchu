"use client";
import Image from "next/image";
import { useState } from "react";

// Import multiple band images
import bandImage1 from "./gallery1.png";
import bandImage2 from "./gallery2.png";
import bandImage3 from "./gallery4.png";
import performanceImage1 from "./gallery3.png";
import performanceImage2 from "./gallery2.png";
import performanceImage3 from "./gallery1.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: bandImage1,
      alt: "Vicious Warfare Band Portrait",
      category: "Band Photo",
    },
    {
      src: performanceImage1,
      alt: "Live Performance Intensity",
      category: "Live Show",
    },
    {
      src: bandImage2,
      alt: "Band in Dark Setting",
      category: "Band Photo",
    },
    {
      src: performanceImage2,
      alt: "Extreme Metal Performance",
      category: "Live Show",
    },
    {
      src: bandImage3,
      alt: "Backstage Moment",
      category: "Behind the Scenes",
    },
    {
      src: performanceImage3,
      alt: "High Energy Concert",
      category: "Concert",
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-[var(--accent-secondary)]">
        Gallery of Darkness
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openImageModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain w-full h-full"
              fill
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p>{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
