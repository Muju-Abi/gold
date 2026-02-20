import { storyblokEditable } from "@storyblok/react";

const CarouselItem = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="w-full h-64 relative bg-gray-100 flex items-center justify-center">
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <h3 className="relative z-10 text-white text-2xl font-bold bg-black/40 p-2">
        {blok.title}
      </h3>
    </div>
  );
};

export default CarouselItem;