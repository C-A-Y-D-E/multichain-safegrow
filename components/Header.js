import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mx-auto 2xl:max-w-7xl absolute left-0   z-20 bg-vulcan-900/20 border-b border-white/5">
      <div class="container relative z-10 mx-auto px-6 max-w-[1280px] w-full filter backdrop-blur-md bg-black/20 md:bg-transparent">
        <div
          x-data="{ open: false }"
          class="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row "
        >
          <div class="flex flex-row items-center justify-between w-full">
            <a
              class="text-lg tracking-tight text-white uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <img src="/logo.png" className="w-24" />
            </a>
            <a href="https://safegrowtoken.com">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
