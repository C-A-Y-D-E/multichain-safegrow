import React from "react";

const Roadmap = () => {
  const handleScreen = () => {
    if (typeof window !== "undefined") {
      if (window?.screen.width < 600) {
        return (
          <img
            src="/roadmap-mob.svg"
            className="mx-auto max-w-[800px] w-full md:hidden"
          />
        );
      } else {
        return (
          <img
            src="/roadmap.svg"
            className="mx-auto max-w-[800px] w-full hidden md:block"
          />
        );
      }
    }
  };
  return (
    <section id="roadmap bg-[#030E1C]">
      <div className="container relative z-10 mx-auto px-6 max-w-[1280px] py-16 lg:py-24">
        {/* <div className="bg-[#32B4AD] absolute h-[100px] md:h-[200px] top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[200px] rounded-full filter blur-[100px]" />
        <div className="bg-[#40CE78] absolute h-[100px] md:h-[200px] top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[200px] rounded-full filter blur-[100px]" /> */}
        <div className="text-center relative z-20">
          <div className="text-[#32B4AD] text-2xl font-heading">OUR</div>
          <h2>ROADMAP</h2>
          {handleScreen()}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
