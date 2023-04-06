import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="border-t border-white/5">
      <div className="container relative z-20 mx-auto px-6 max-w-[1280px] ">
        <footer class="">
          <div class="pt-16 pb-12 text-sm ">
            <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                class="col-span-4 md:col-span-8 lg:col-span-8"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  class="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-slate-700"
                  href="javascript:void(0)"
                >
                  <img src="/logo.png" className="max-w-[100px] w-full" />
                </a>
                <p className="max-w-[400px]">
                  A human-focused technology and innovation business expanding
                  blockchain technologies for a brighter tomorrow.
                </p>
              </div>

              <nav
                class="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  class="mb-6 text-base font-medium text-[#60E6C5]"
                  id="footer-about-5-logo"
                >
                  Socials
                </h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a
                      target="_blank"
                      href="https://t.me/SafeGrowProject"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Telegram
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      target="_blank"
                      href="https://www.twitter.com/SafeGrowToken"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Twitter
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                class="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-get-in-touch-5-logo"
              >
                <h3
                  class="mb-6 text-base font-medium text-[#60E6C5]"
                  id="footer-get-in-touch-5-logo"
                >
                  Quick Links
                </h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a
                      href="#home"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Home
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      href="#about"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      href="#features"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Features
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      href="#roadmap"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      href="https://swap.safegrowtoken.com"
                      target="_blank"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Swap
                    </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a
                      href="/market"
                      class="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Markets
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
      <div class="py-4 text-sm border-t  border-white/5">
        <div class="container px-6 mx-auto relative z-20">
          <div class="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <a
              id="WindUI-3-sub"
              aria-label="WindUI logo"
              aria-current="page"
              class="flex items-center col-span-1 gap-2 text-base font-medium leading-6 whitespace-nowrap focus:outline-none md:col-span-4 lg:col-span-6"
              href="mailto:contact@safegrowtoken.com"
            >
              contact@safegrowtoken.com
            </a>
            <nav
              class="col-span-3 md:col-span-4 lg:col-span-6"
              aria-labelledby="subfooter-links"
            >
              <h3 class="sr-only" id="subfooter-links">
                Get in touch
              </h3>
              <ul class="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                <li class="leading-6">
                  <a
                    target="_blank"
                    href="https://t.me/SafeGrowProject"
                    className="h-8 text-xl w-8 flex items-center justify-center gradient rounded-full"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li class="leading-6">
                  <a
                    target="_blank"
                    href="https://www.twitter.com/SafeGrowToken"
                    className="h-8 text-xl w-8 flex items-center justify-center gradient rounded-full"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
