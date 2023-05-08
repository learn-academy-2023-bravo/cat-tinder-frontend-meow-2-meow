
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://c1.wallpaperflare.com/preview/46/458/528/cat-kitten-hunting-play.jpg',
    altText: 'kitty cat',
    caption: 'Tilly and Whiskers: Tilly, a 2-year-old female cat, was looking for a relaxed companion to enjoy lazy afternoons with. Whiskers, a 4-year-old male cat, was also seeking a low-key feline friend. They hit it off right away, bonding over their mutual love of napping in the sun and watching birds. Tilly and Whiskers have been inseparable ever since, often seen snuggled up together in their shared sunbeam.',
    key: 1,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/04/24/08/22/cats-6203465_960_720.jpg',
    altText: 'Slide 2',
    caption: `Luna and Simba: Luna, a 2-year-old female cat, was looking for a playful companion to share fun and games with. Simba, a 5-year-old male cat, was seeking a cuddly partner to shower with love and affection. Despite their different personalities, Luna and Simba hit it off immediately, bonding over their love of chasing toys and snuggling up for cuddles. They've since become the ultimate power couple, frequently spotted napping together in cozy corners.`,
    key: 2,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2014/01/01/13/27/cat-237185_960_720.jpg',
    altText: 'Slide 3',
    caption: `Felix and Cleopatra: Felix, a 3-year-old male cat, was looking for a well-groomed partner who appreciated a clean and tidy coat. Cleopatra, a 2-year-old female cat, was seeking a regal companion who could match her elegance and grace. They were initially drawn to each other's sophisticated personalities and love of pampering. Felix and Cleopatra have since become inseparable, often seen grooming each other's fur to perfection and enjoying luxurious cat naps in their castle-like bed`,
    key: 3,
  },
];

const CarouselNav = (args) =>  {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
    
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%"}}/>
        <CarouselCaption
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      style={{ alignItems: 'center'}}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        style={{ cursor:"pointer"}}
        className="carousel-control-prev"
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        style={{ cursor:"pointer"}}
        className="carousel-control-next"
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselNav;