import React from "react";
import Lottie from "lottie-react";
import Head from "next/head";
import Loading from "json/B6OF6EmqVD.json";
import Script from "next/script";
const exchange = () => {
  const style = {
    height: 200,
  };
  return (
    <div className="">
      <Head>
        <title>Multichain | SafeGrow</title>
      </Head>
      <Script
        src="https://widgets.rubic.exchange/iframe/bundle.min.js"
        onLoad={() => {
          var configuration = {
            from: "bnb",
            to: "0xa71dcaaf5ba390b1b2012323a8810fac121f90dd",
            fromChain: "BSC",
            toChain: "ETH",
            amount: 1,
            iframe: "flex",
            hideSelectionFrom: false,
            hideSelectionTo: true,
            tokenSearch: true,
            rubicLink: true,
            theme: "dark",
            background: "#082b1b",
            injectTokens: {
              eth: ["0xa71dcaaf5ba390b1b2012323a8810fac121f90dd"],
            },
            slippagePercent: {
              instantTrades: 2,
              crossChain: 5,
            },
            fee: 0.075,
            feeTarget: "0x1445802Aa5Bbcfeb84baF7B78f0830D537D5fdbE",
          };
          Object.freeze(configuration);

          // create widget
          rubicWidget.init(configuration);
        }}
      />
      {/* <Script id="show-banner" strategy="afterInteractive">
        {`var configuration = {
        from: 'bnb',
        to: '0xa71dcaaf5ba390b1b2012323a8810fac121f90dd',
        fromChain: 'BSC',
        toChain: 'ETH',
        amount: 1,
        iframe: 'flex',
        hideSelectionFrom: false,
        hideSelectionTo: true,
        tokenSearch: true,
        rubicLink: true,
        theme: 'dark',
        background: '#082b1b',
        injectTokens: {
            'eth': [
                '0xa71dcaaf5ba390b1b2012323a8810fac121f90dd'
            ]
        },
        slippagePercent: {
            instantTrades: 2,
            crossChain: 5
        },
        fee: 0.075,
        feeTarget: '0x1445802Aa5Bbcfeb84baF7B78f0830D537D5fdbE'
    }

    // prevent accidental changes to the object, for example, when re-creating a widget for another theme
    Object.freeze(configuration);

    // create widget
    rubicWidget.init(configuration);
`}
      </Script> */}
      <div className="container max-w-[1280px] px-6 py-24 mx-auto h-full">
        <div className="flex items-center justify-center flex-col h-full">
          <h3 className="text-center">SFG Multichain</h3>
          <div
            id="rubic-widget-root"
            className="mt-8 max-w-[500px] mx-auto"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default exchange;
