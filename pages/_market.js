import Table from "components/Table";
// import Table from 'c'
import React, { useMemo, useState, useEffect } from "react";
const market = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          <div className="flex gap-2 items-center">
            <img src={`/list/${value.logo}.png`} className="w-8" />
            <a
              href={`${value.link}`}
              target="_blank"
              className="text-[#32B4AD]"
            >
              {value.text}
            </a>
          </div>
        ),
      },
      {
        Header: "Pair",
        accessor: "pair",
      },
      {
        Header: "Added",
        accessor: "added",
      },
      {
        Header: "Country",
        accessor: "country",
        Cell: ({ cell: { value } }) => (
          <img src={`/flags/${value}.png`} className="w-8" />
        ),
      },
    ],
    []
  );
  const data = [
    {
      name: {
        text: "SafeGrow Swap",
        logo: "safegrow",
        link: "https://swap.safegrowtoken.com",
      },
      pair: "SFG/ETH",
      added: "2023-04-05 ",
      country: "usa",
      link: "",
    },
    {
      name: {
        text: "Uniswap",
        logo: "uniswap",
        link: "https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=ETH&outputCurrency=0xA71DCaaf5ba390B1B2012323A8810fAc121F90dd",
      },
      pair: "SFG/ETH",
      added: "2023-04-01",
      country: "usa",
      link: "",
    },
    {
      name: {
        text: "HotBit",
        logo: "hotbit",
        link: "https://www.hotbit.io/exchange?symbol=SAFEGROW_USDT",
      },
      pair: "SFG/USDT",
      added: "2023-04-04 ",
      country: "hong",
      link: "",
    },

    {
      name: {
        text: "Bitmart",
        logo: "bitmart",
        link: "#",
      },
      pair: "SFG/USDT",
      added: "2023-04-05 ",
      country: "usa",
      link: "",
    },
    // { name: "HOTBIT", pair: "SFG/ETH", added: "2023-04-01", country: "USA" },
  ];
  return (
    <div className="pt-16 relative">
      <img
        src="/hero-bg.svg"
        className="fixed inset-0 min-h-full min-w-full object-cover"
      />
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
      <div className="container mx-auto px-6 max-w-[1280px] w-full py-24 relative z-10">
        <h2>MArkets</h2>
        <div className="mt-4">A list of exchanges that support SafeGrow</div>
        <div className="w-full mt-16">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default market;
