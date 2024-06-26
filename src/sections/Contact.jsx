import React, { useEffect, useRef } from "react";
import { TextSlider } from "../component/TextSlider";

export const Contact = () => {
    const time = useRef(null)

    useEffect(() => {
      let currentTime = time.current;
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()

      if (hours >= 12) {
        currentTime.textContent = hours + ":" + minutes + " PM";
      } else {
        currentTime.textContent = hours + ":" + minutes + " AM";
      }

    })
  
  return (
    <div>
      <div class="w-full min-h-screen" id="lets-talk">
        <div class="container mx-auto mt-[10rem] flex flex-col lg:flex-row gap-12 px-2">
          <div class="w-full lg:w-[70%] h-full">
            <p class="text-[10vw] md:text-[8vw] lg:text-[5vw] font-bold text-start">
              CONTACT ME
            </p>
            <p class="font-bold text-xl md:text-4xl">
              Do you have an awesome idea?
            </p>
            <p class="font-bold text-xl md:text-4xl mt-2">
              Lest's bring it to life
            </p>
            <p class="opacity-[.6] lg:text-2xl leading-[25px] md:leading-[30px] text-start mt-3">
              Am available for both freelance and full time jobs, so just
              contact me for any!
            </p>
            <form class="w-full mt-12">
              <div class="flex flex-col lg:flex-row w-full gap-3">
                <div class="lg:w-1/2 w-full min-h-12">
                  <label class="block">Name</label>
                  <input
                    class="w-full h-12 border-b-2 text-lg outline-none"
                    type="text"
                    placeholder="Enter your name here"
                    id="name"
                    required
                  />
                </div>
                <div class="lg:w-1/2 w-full">
                  <label class="block">Email</label>
                  <input
                    class="w-full h-12 border-b-2 text-lg outline-none"
                    placeholder="Enter your email here"
                    type="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="mt-12">
                <label class="block">Message</label>
                <textarea
                  class="mt-3 outline-none border-b-2 w-full"
                  id="message"
                  placeholder="Enter message here"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                class="bg-black text-white px-8 py-4 rounded-3xl mt-4"
                onclick="sendMessage()"
              >
                Send Message
              </button>
            </form>
          </div>
          <div class="w-full lg:w-[20%] h-full flex flex-col gap-[5rem]">
            <div>
              <h2 class="text-3xl font-bold">Contact Details</h2>
              <p class="mt-3 text-xl opacity-[.6]">
                <TextSlider text={"mbongombongo4@gmail.com"} />
              </p>
              <p class="mt-3 text-xl opacity-[.6]">
                <TextSlider text={"+237671267490"} />
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-4">Socials</h2>
              <a
                href="https://wa.me/qr/SWSUG2LUZJCFG1"
                target="_blank"
                class="flex items-center gap-2 mb-5"
              >
                <img src="whatsapp.png" class="w-6" alt="" />
                <TextSlider text={"Whatsapp"} />
              </a>
              <a href="#" target="_blank" class="flex items-center gap-2 mb-5">
                <img src="instagram(1).png" class="w-6" alt="" />
                <TextSlider text={"Instagram"} />
              </a>
              <a
                href="https://github.com/mbongoelvis"
                target="_blank"
                class="flex items-center gap-2 mb-5"
              >
                <img src="github(1).png" class="w-6" alt="" />
                <TextSlider text={"Github"} />
              </a>
              <a
                href="https://www.linkedin.com/in/mbongo-elvis/"
                target="_blank"
                class="flex items-center gap-2"
              >
                <img src="linkedin(1).png" class="w-6" alt="" />
                <TextSlider text={"LinkedIn"} />
              </a>
            </div>
            <div>
              <h2 class="text-3xl font-bold mb-4">Location</h2>
              <p class="mt-3 text-xl opacity-[.6]">SouthWest, Cameroon</p>
              <p class="mt-3 text-xl opacity-[.6] time" ref={time}>
                12:45 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
