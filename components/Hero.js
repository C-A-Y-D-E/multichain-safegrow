import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-16 bg-[#030E1C]" id="home">
      <img
        src="/blue-gra.svg"
        className="absolute top-0 pointer-events-none select-none left-0"
        draggable={false}
      />
      <img
        src="/green-gra.svg"
        className="absolute top-0 pointer-events-none select-none right-0"
        draggable={false}
      />
      <div className="container relative z-10 mx-auto px-6 max-w-[1280px] py-16">
        <h1 className="text-center">
          MANAGE <span className="text-[#32B4AD]">BUY/SELL </span>IN
          <br />
          An easier Way
        </h1>
        <div className="mx-auto max-w-[700px] text-center text-lg mt-4">
          The SafeGrow exchange is a revolutionary new idea that will bring
          tokenomics to all of crypto on its platform. We call this
          Cryptonomics.
        </div>
        <div className="flex items-center gap-6 justify-center mt-8">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=ETH&outputCurrency=0xA71DCaaf5ba390B1B2012323A8810fAc121F90dd"
            className="gradient py-2 px-4 sm:px-8 rounded-xl h-[50px] sm:h-[70px] flex gap-4 items-center"
          >
            <span className="text-black font-bold text-xs sm:text-lg">
              Trade On
            </span>
            <img src="/uniswap.png" className="w-8 sm:w-12" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x6a5015c449e345283ab9466d1d2fec0cbfce2697"
            className="bg-[#35B9C0]/5 border border-[#60C1D6] py-2 px-4 sm:px-8 rounded-xl h-[50px] sm:h-[70px] flex gap-4 items-center"
          >
            <span className="text- font-bold text-xs sm:text-lg">Watch On</span>
            <img src="/dextool.png" className="w-6 sm:w-8" />
          </a>
        </div>
        <div className="flex items-center justify-center mt-6 gap-6">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://swap.safegrowtoken.com"
            className=""
          >
            <img src="/sfgswap.svg" className="max-w-[150px] sm:max-w-none" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://exchange.safegrowtoken.com"
            className=""
          >
            <img
              src="/exchange.svg"
              className="cursor-not-allowed max-w-[150px] sm:max-w-none"
            />
          </a>
        </div>

        {/* <img src="/hero.svg" className="mx-auto mt-8 md:mt-16" /> */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-6 lg:gap-16 items-center mt-8 md:mt-16 mx-auto">
          <a
            href="https://etherscan.io/address/0xA71DCaaf5ba390B1B2012323A8810fAc121F90dd"
            target="_blank"
          >
            <img src="/partners/etherscan.png" />
          </a>
          <a
            href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=ETH&outputCurrency=0xA71DCaaf5ba390B1B2012323A8810fAc121F90dd"
            target="_blank"
          >
            <img src="/partners/uniswap.png" />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/safegrow/"
            target="_blank"
          >
            <img src="/partners/cmc.png" />
          </a>
          <a href="#" target="_blank">
            <img src="/partners/certik.png" />
          </a>
          <a href="#" target="_blank">
            <img src="/partners/cg.png" />
          </a>
          <a
            href="https://www.hotbit.io/exchange?symbol=SAFEGROW_USD"
            target="_blank"
          >
            <img src="/partners/hotbit.png" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
