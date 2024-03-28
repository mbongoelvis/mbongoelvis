import React from 'react'
import { useState } from 'react';

export const TextSlider = ({ text }) => {
    const [slide, setSlide] = useState(false)
  return (
    <div
      onMouseLeave={() => setSlide(!slide)}
      onMouseEnter={(e) => setSlide(!slide)}
      className="w-full relative ease-in-out duration-75 pb-[-1.4rem] overflow-hidden"
    >
      <p
        className={
          slide
            ? "translate-y-[-1.6rem] ease-in-out duration-[.5s]"
            : "translate-y-0 ease-in-out duration-[.5s]"
        }
      >
        {text}
      </p>
      <span
        className={
          slide
            ? "top-0 ease-in-out duration-[.5s] absolute"
            : "top-7 ease-in-out duration-[.5s] absolute"
        }
      >
        {text}
      </span>
    </div>
  );
}
