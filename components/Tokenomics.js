import React from "react";

const Tokenomics = () => {
  return (
    <section id="tokenomics">
      <div className="container relative z-10 mx-auto px-6 max-w-[1280px] py-16 lg:py-24">
        {/* <div className="bg-[#32B4AD] absolute h-[100px] md:h-[200px] top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[200px] rounded-full filter blur-[150px]" />
        <div className="bg-[#40CE78] absolute h-[100px] md:h-[200px] top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[200px] rounded-full filter blur-[150px]" /> */}
        <h2 className="text-center">
          Safe<span className="text-[#32B4AD]">nomics</span>
        </h2>
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="text-2xl uppercase">Total SUPPLY</div>
          <h2>1,000,000,000</h2>
        </div>

        <div className="grid grid-cols-2 mx-auto max-w-[900px] gap-16 mt-16">
          <div>
            <h4 className="text-center">BUY Tax = 5%</h4>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 py-4 px-3 rounded-2xl flex flex-col items-center gap-4">
                <h2>2%</h2>
                <div className="tracking-[0.2em] font-medium">LIQUIDITY</div>
              </div>
              <div className="bg-white/10 py-4 px-3 rounded-2xl flex flex-col items-center gap-4">
                <h2>3%</h2>
                <div className="tracking-[0.2em] font-medium">MARKETING</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-center">SELL TAX = 5%</h4>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 py-4 px-3 rounded-2xl flex flex-col items-center gap-4">
                <h2>2%</h2>
                <div className="tracking-[0.2em] font-medium">LIQUIDITY</div>
              </div>
              <div className="bg-white/10 py-4 px-3 rounded-2xl flex flex-col items-center gap-4">
                <h2>3%</h2>
                <div className="tracking-[0.2em] font-medium">MARKETING</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] grid md:grid-cols-2 gap-12 md:gap-24 mx-auto mt-16">
          <div className="relative min-h-[300px]">
            <img src="/l-box.svg" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full p-6">
              <img src="/features/team.svg" loading="eager" />
              <h4>Community Focused</h4>
              <div className="text-sm mt-2">
                Community focused and stealth launch. All tokens were initially
                added to uniswap. Dev team participated with everyone else.
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <img src="/l-box.svg" className="-scale-x-100" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full p-6">
              <img
                src="/features/lp.png"
                className="mb-6 w-16"
                loading="eager"
              />
              <h4>Automatic LP</h4>
              <div className="text-sm mt-2">
                Every trade contributes towards auto-generating liquidity that
                goes into multiple pools used by exchanges
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
