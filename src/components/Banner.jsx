import { useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349",
//   "https://images.unsplash.com/photo-1548365328-8b849e6c7b38",
//   "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  "https://images.unsplash.com/photo-1553621042-f6e147245754",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f"
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-[400px]">
      <img
        src={slides[current]}
        className="w-full h-full object-cover"
      />

      <button onClick={prevSlide} className="absolute left-5 top-1/2">⬅</button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2">➡</button>
    </div>
  );
};

export default Banner;
