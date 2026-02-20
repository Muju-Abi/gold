'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import { StoryblokComponent } from '@storyblok/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = ({ blok }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

	return (
		<div className="carousel embla overflow-hidden" ref={emblaRef} {...storyblokEditable(blok)}>
			<div className="embla__container flex">
                {blok.items.map((nestedBlok) => (
                <div className="embla__slide flex-[0_0_100%] min-w-0" key={nestedBlok._uid}>
                    <StoryblokComponent blok={nestedBlok} />
                </div>
                ))}
            </div>
		</div>
	);
};

export default Carousel;