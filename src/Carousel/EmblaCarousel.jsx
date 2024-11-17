import React, { useState, useEffect } from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({ slides, options, onSlideChange }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
        if (onSlideChange) {
          // Pass both image and name to Main.jsx
          onSlideChange(slides[index]);
        }
      };
      emblaApi.on('select', onSelect);
      onSelect(); // Set initial selected index on mount
    }
  }, [emblaApi, onSlideChange, slides]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((obj, index) => (
            <div
              className={`embla__slide ${selectedIndex === index ? 'border-2 border-blue-500' : ''}`}
              key={index}
            >
              <div className="embla__slide__number">
                <div className="">
                    <img src={obj.image} alt={obj.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
