import React, { useState } from 'react';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  const OPTIONS = { dragFree: true };
  const SLIDES = [
    {
      name: 'walid',
      image: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    },
    {
      name: 'zahid',
      image: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    },
    {
      name: 'Sazid',
      image: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    },
  ];

  const [bgImage, setBgImage] = useState(SLIDES[0].image);
  const [currentName, setCurrentName] = useState(SLIDES[0].name);

  // Handler to update both the background and the current name
  const handleSlideChange = (slide) => {
    setBgImage(slide.image);
    setCurrentName(slide.name);
  };

  // Style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    transition: 'background 0.5s ease-in-out',
  };

  return (
    <div className="" style={backgroundStyle}>
      <div className="px-12">
        <Navbar />
      </div>

      <div className="flex justify-end">
        <div className="px-12 py-48">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} onSlideChange={handleSlideChange} />
        </div>
      </div>

      {/* Display the current name */}
      <div className="text-white text-center mt-4">
        <h1 className="text-4xl font-bold">{currentName}</h1>
      </div>
    </div>
  );
};

export default Main;
