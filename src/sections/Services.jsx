import React from 'react'

export const 
Services = () => {
  return (
    <div>
      <div className="w-full min-h-screen">
        <div className="container mx-auto pt-[7rem] pl-2 lg:pl-0">
          <h1 className="text-[15vw] md:text-[8vw] lg:text-[5vw] font-bold text-center lg:text-start">
            SERVICES
          </h1>
          <div className="grid grid-cols-1 gap-[5%] lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-4xl my-4">My expertise</h2>
              <p className="opacity-[.6] lg:text-2xl leading-[25px] md:leading-[30px] text-start">
                I focus on all things design and web related. With each of my
                services, my goal is to deliver an impactful and elevating
                digital experience for everyone.
              </p>
            </div>
            <div>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                Frontend web development
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                Web Design
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                Responsive Web design
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[5%] lg:grid-cols-2 mt-12">
            <div>
              <h2 className="font-bold text-4xl my-4">My Digital Tool Box</h2>
              <p className="opacity-[.6] lg:text-2xl leading-[25px] md:leading-[30px] text-start">
                These are my go to tech stack to make any projects happen. I am
                always eager of learning more about my current stack, and new
                technologies that could expand my horizons.
              </p>
            </div>
            <div>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                HTML
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                CSS
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                JAVASCRIPT
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                TAILWIND
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                REACT.JS
              </p>
              <p className="opacity-[.6] font-bold lg:text-[3vw] md:text-[5vw] text-[7vw]">
                NODEJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
