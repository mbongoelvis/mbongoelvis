import React from "react";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-12" id="projects">
      <div className="container min-h-full mx-auto">
        <h1 className="text-[15vw] mt-12 md:text-[8vw] lg:text-[5vw] font-bold text-center lg:text-start">
          PROJECTS
        </h1>
        {/* first project */}
        <div className="w-full grid grid-cols-1 px-2 lg:grid-cols-2 min-h-screen gap-5">
          <a
            href="https://country-api-topaz-ten.vercel.app/"
            target="blank"
            className="rounded overflow-hidden h-full hover:rounded-2xl group transition pb-5 ease-in-out flex flex-col "
          >
            <div className="w-full h-full group-hover:rounded overflow-hidden">
              <img
                src="countryAPI.png"
                alt=""
                className="group-hover:scale-[1.1] transition ease-in-out h-full"
              />
            </div>
            <p className="mt-5 text-4xl font-bold opacity-[.8]">
              Country Infomations
            </p>
            <div className="flex gap-3 mt-3 flex-wrap">
              <p className="text-xl flex items-center font-bold px-3 text-gray-500 border rounded-3xl border-black">
                REACT
              </p>
              <p className="text-xl font-bold text-gray-500 py-1 px-3 border rounded-3xl border-black">
                TAILWINDCSS
              </p>
              <p className="text-xl font-bold text-gray-500 py-1 px-3 border rounded-3xl border-black">
                COUNTRY API
              </p>
            </div>
          </a>
          <div className="w-full h-full grid gap-5 lg:grid-rows-2">
            <div className="bg-red-400 rounded-xl"></div>
            <div className="bg-green-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
