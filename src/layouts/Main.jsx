import React, { useState } from 'react';
import EmblaCarousel from '../Carousel/EmblaCarousel';
import Navbar from '../components/Navbar/Navbar';
import Banner1 from '../assets/Rectangle 1.png'
import Banner2 from '../assets/Sajek.png'
import Banner3 from '../assets/Sreemongol.png'
import Banner4 from '../assets/sundorbon.png'
const Main = () => {
  const OPTIONS = { dragFree: true };
  const SLIDES = [
    {
      name: 'walid',
      image: Banner1,
    },
    {
      name: 'zahid',
      image: Banner2,
    },
    {
      name: 'Sazid',
      image: Banner3,
    },
    {
      name: 'Rohit',
      image: Banner4,
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
    transition: 'background 0.5s ease-in-out',
  };

  return (
    <div className="" style={backgroundStyle}>
      <div className="px-12">
        <Navbar />
      </div>

      <div className="flex justify-end">
        <div className="px-12">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} onSlideChange={handleSlideChange} />
        </div>
      </div>

      {/* Display the current name */}
      {/* <div className="text-white text-center mt-4">
        <h1 className="text-4xl font-bold">{currentName}</h1>
      </div> */}
    </div>
  );
};

export default Main;
