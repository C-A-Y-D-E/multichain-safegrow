import React from "react";

const Features = () => {
  const features = [
    {
      title: "SAfe swap",
      desp: `SafeSwap allows you to swap cryptocurrencies quickly and securely without the need for a centralized intermediary`,
      icon: "swap",
    },
    {
      title: "Rug Checker",
      desp: `SafeSwap's rug checker tool helps you identify and avoid potential scams by analyzing the smart contract code of new tokens`,
      icon: "rug",
    },
    {
      title: "Stop Limit Buy/Sell",
      desp: `With SafeSwap's stop limit buy/sell feature, you can set limits on the price at which you want to buy or sell cryptocurrencies, helping you manage your risk and maximize your profits`,
      icon: "limit",
    },
    {
      title: "User-friendly Interface",
      desp: `SafeSwap offers a user-friendly interface that is easy to navigate, even for those new to decentralized exchanges.`,
      icon: "limit",
    },
    {
      title: "Wide Range of Cryptocurrencies",
      desp: `SafeSwap offers a wide range of cryptocurrencies to choose from, ensuring that you can trade the coins you want`,
      icon: "limit",
    },
    {
      title: "Secure",
      desp: `SafeSwap is highly secure, using advanced encryption methods to protect your data and assets`,
      icon: "limit",
    },
  ];
  return (
    <div className="relative" id="features">
      {/* <div className="bg-[#32B4AD] absolute h-[300px] right-10 top-[20%] -translate-y-1/2 w-[300px] rounded-full filter blur-[500px]" />
      <div className="bg-[#40CE78] absolute h-[300px] left-10 bottom-16  w-[300px] rounded-full filter blur-[500px]" /> */}
      <div className="container relative mx-auto max-w-[1280px] py-16 px-8 bg-[#1E1E1E]/50 filter backdrop-blur-lg z-10 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-24 sm:gap-x-8 sm:gap-y-24 mt-16">
          {features.map((f, idx) => (
            <div className="relative min-h-[350px]">
              <img
                src="/box.svg"
                loading="eager"
                className={`w-full ${
                  idx % 2 == 0 ? "" : "-scale-y-100"
                } pointer-events-none select-none`}
              />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full px-10">
                <div className="flex flex-col items-center">
                  <img src="/features/swap.svg" />
                  <h4 className="mt-6 text-center">{f.title}</h4>
                  <div className="text-center mt-2">{f.desp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
