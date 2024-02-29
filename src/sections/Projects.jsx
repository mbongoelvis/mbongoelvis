import React from "react";

export const Projects = () => {
  return (
    <div className="w-full min-h-screen pt-12" id="projects">
      <div className="container min-h-full mx-auto">
        <h1 className="text-[15vw] mt-12 md:text-[8vw] lg:text-[5vw] font-bold text-center lg:text-start">
          PROJECTS
        </h1>
        {/* first project */}
        <div className="w-full min-h-[90rem] bg-red-400">
          <a href="https://mbongo-elvis-country-api.vercel.app/"></a>
          <div>
            <img src="" alt="" />
          </div>
          <p>COUNTRY API</p>
          <div>
            <p>The Tools used as:</p>
            <p>React, Tailwindcss git and country API from rapidAPI</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
