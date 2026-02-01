import { useEffect, useState } from "react";

const slides = [
   "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
  "https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1548365328-8b849e6c7b38",
//   "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
  "https://images.unsplash.com/photo-1670164745517-5b41d4660613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZvb2RzfGVufDB8fDB8fHww",
 
];

// const Banner = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   };

//   return (
//     <div className="relative w-full h-[400px]">
//       <img
//         src={slides[current]}
//         className="w-full h-full object-cover"
//       />

//       <button onClick={prevSlide} className="absolute  left-5 top-1/2">⬅</button>
//       <button onClick={nextSlide} className="absolute right-5 top-1/2">➡</button>
//     </div>
//   );
// };

// export default Banner;

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Slide Image */}
      <img
        src={slides[current]}
        alt="slide"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
      />

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-primary scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
