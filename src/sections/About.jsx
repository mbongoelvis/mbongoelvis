import React from 'react'

export const About = () => {
  return (
      <div>
        <div className="w-full min-h-screen relative pt-12" id="about">
          <div className="flex gap-[3%] flex-wrap justify-center">
            <p className="font-bold opacity-[30%] text-[7vw]">GIT</p>
            <p className="font-bold opacity-[30%] text-[7vw]">HTML</p>
            <p className="font-bold opacity-[30%] text-[7vw]">CSS</p>
            <p className="font-bold opacity-[30%] text-[7vw]">JAVASCRIPT</p>
            <p className="font-bold opacity-[30%] text-[7vw]">TAILWIND</p>
            <p className="font-bold opacity-[30%] text-[7vw]">REACT</p>
          </div>

          <img
            src="./public/shape5 1.png"
            className="absolute -right-[30px] w-[45vw] lg:w-[25vw] lg:top-[12rem] top-[5rem]"
            alt=""
          />
          <div className="container mx-auto min-h-12 mt-[12rem] grid lg:grid-cols-2 grid-cols-1">
            <div className="mb-12 lg:mb-0 flex items-center justify-center">
              <img src="./public/sideImage.png" alt="" />
            </div>
            <div className="flex flex-col justify-center item-center min-h-12">
              <h1 className="text-[15vw] md:text-[8vw] lg:text-[5vw] font-bold text-center lg:text-start">
                ABOUT ME
              </h1>
              <p className="w-[90%] mx-auto lg:mx-0 lg:text-2xl leading-[25px] lg:leading-[40px] opacity-[.6] text-center lg:text-start pb-12 lg:pb-0">
                I am a developer based in Buea, Cameroon, with expertise in
                frontend development. I specialize in Developing, intuitive, and
                minimalistic designs for startups and small businesses to help
                them stand out in the digital landscape with a powerful impact
                When I am not developing or eating :) , I enjoy watching movies
                and playing games.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
