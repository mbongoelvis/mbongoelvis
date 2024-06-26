import React from 'react'

export const Hero = () => {
    return (
      <div>
        <div className="w-full min-h-screen relative pt-12">
          <p className="absolute hero-text pointer-events-none text-[11.2vw] left-[2%] mt-5 md:mt-0 font-bold opacity-30">
            WEB DEVELOPER
          </p>
          <img
            src="Vector-dot.png"
            alt=""
            className="absolute left-[40%] lg:left-[40%] md:left-[70%] top-[60%]"
          />
          <img
            src="Vector-square.png"
            alt=""
            className="absolute top-[40%] lg:top-[30%] lg:left-[55%] md:left-[80%]"
          />
          <img
            src="shape5 1.png"
            alt=""
            className="absolute bottom-5 lg:top-[70%] md:bottom-[9rem]"
          />
          <section className="w-full min-h-[92vh] container mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center lg:items-start h-full py-[7rem]">
              <h1 className="normal-text text-[10vw] md:text-[6vw] lg:text-[3vw] font-bold">
                HI there,
              </h1>
              <h1 className="text-[8vw] md:text-[6vw] lg:text-[3vw] lg:text-start text-center font-bold mb-5 normal-text2">
                Am called Mbongo elvis
              </h1>
              <p className="text-[110%] md:[130%] text-center lg:text-start lg:text-2xl opacity-[.6] normal-text3">
                I specialize in crafting immersive
                <br className="md:hidden lg:flex" />
                digital experiences that captivate <br />
                and engage individuals by seamlessly
                <br className="md:hidden lg:block" />
                integrating development and design.
              </p>
            </div>
            <div className="flex-1 lg:mt-3 h-full overflow-hidden">
              <img
                src="me2.png"
                className="min-w-[100%] lg:mt-[3.8rem] hero-me"
                alt="hero"
              />
            </div>
          </section>
        </div>
      </div>
    );
}
