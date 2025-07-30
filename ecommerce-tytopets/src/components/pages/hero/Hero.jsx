import { useState } from "react";

const slides = [
  {
    title: "Bienvenido a TyTo Pets",
    description: "Todo lo que tu mascota necesita en un solo lugar",
    button: "Explorar Productos",
    bgColor: "bg-yellow-500",
    bgImage: "url('/slider1.png')",
  },
  {
    title: "Productos Naturales",
    description: "El bienestar de tu mascota empieza con lo mejor de la naturaleza",
    button: "Ver más",
    bgColor: "bg-green-600",
    bgImage: "url('/slider2.png')",
  },
  {
    title: "Cuida su salud",
    description: "Accesorios, vitaminas y más para su salud y felicidad",
    button: "Descubrir",
    bgColor: "bg-blue-500",
    bgImage: "url('/slider3.png')",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden mb-8">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: slide.bgImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`h-full w-full bg-black/40 flex flex-col items-center justify-center text-center p-6`}>
            <h1 className="text-6xl font-bold text-white drop-shadow-md">{slide.title}</h1>
            <p className="text-xl text-white mt-2 drop-shadow-md">{slide.description}</p>
            <button className="mt-4 px-6 py-2 bg-cyan-700 cursor-pointer text-white rounded-lg hover:bg-cyan-800transition">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};
