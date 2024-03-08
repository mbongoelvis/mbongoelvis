import React, { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cursor = useRef(null);

  useEffect(() => {
    const userCursor = cursor.current;
    // getting the client x and y coordinates
    document.addEventListener("mousemove", (e) => {
      userCursor.style.left = `${e.clientX}` + "px";
      userCursor.style.top = `${e.clientY}` + "px";
    });
  });
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[2]">
      {/* nav bar */}
      <nav className="container px-2 lg:px-0 min-h-[70px] mx-auto flex items-center justify-between">
        <div className="logo">
          <img
            src="smallLogo.png"
            alt="Logo"
            className="lg:hidden cursor-pointer ld ld-blur-in"
          />
          <img
            src="main logo.png"
            alt="Logo"
            className="hidden lg:block cursor-pointer ld ld-blur-in"
          />
        </div>
        {/* links */}
        <div className="links gap-[4rem] hidden lg:flex h-full">
          <a href="#" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#projects" className="link">
            Project
          </a>
          <a
            href="MBONGO Elvis M Web Developer +237671267490-4.pdf"
            className="link"
            download
          >
            Download CV
          </a>
          {/* cursor */}
          <div className="cursor" ref={cursor}></div>
        </div>
        {/* lets talk btn */}
        <a
          href="#lets-talk"
          className="px-10 rounded-xl hidden lg:flex py-3 bg-black text-white ld ld-bounce-in"
        >
          Let talk
        </a>

        {/* mobile menu */}
        <div
          className="z-10 relative lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="menu-btn lg:hidden flex flex-col gap-1 py-3 cursor-pointer">
            <div
              className={
                isOpen
                  ? "bg-black w-8 h-1 rounded-xl top top-active"
                  : "bg-black w-8 h-1 rounded-xl top"
              }
            ></div>
            <div
              className={
                isOpen
                  ? "bg-black w-8 h-1 rounded-xl top middel-active"
                  : "bg-black w-8 h-1 rounded-xl top"
              }
            ></div>
            <div
              className={
                isOpen
                  ? "bg-black w-8 h-1 rounded-xl top bottom-active"
                  : "bg-black w-8 h-1 rounded-xl top"
              }
            ></div>
          </div>
        </div>

        <div
          className={
            isOpen
              ? "w-[100vw] lg:hidden absolute z-[100] opacity-1 left-0 top-[4rem] min-h-screen bg-white flex mobile-menu items-center justify-center transition-all ease-in-out"
              : "hidden"
          }
        >
          <div className="min-w-12 h-[40vh] flex flex-col gap-5 items-center text-3xl">
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="mobile-link"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="mobile-link"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="mobile-link"
            >
              Project
            </a>
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="./public/MBONGO Elvis M Web Developer +237671267490-4.pdf"
              className="mobile-link"
              download
            >
              Download CV
            </a>
            {/* let talk obile btn */}
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="#lets-talk"
              className="px-10 rounded-xl text-lg py-3 bg-black text-white ld ld-bounce-in mobile-link"
            >
              Let talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
