"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const links = [
    { title: "Superpanaromic", href: "/" },
    { title: "panaromic", href: "/" },
    { title: "club", href: "/" },
    { title: "solar roof", href: "/" },
    { title: "coliseum roof", href: "/" },
  ];
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 text-white text-xl flex w-screen items-center justify-between font-black p-6">
      <div>Logo</div>
      <div className="lg:flex gap-5 text-lg hidden">
        {links.map((link, index) => (
          <Ref {...link} key={index} />
        ))}
      </div>

      <div className="flex gap-2 z-10">
        <div className="lg:flex gap-4 flex-col font-semibold text-sm items-end justify-end hidden">
          <div className="w-40 h-6 rounded-full bg-white text-black flex items-center justify-center">Configurator</div>
          <div className="w-40 h-6 rounded-full bg-black text-whtie flex items-center justify-center">About Us</div>
        </div>
        <button onClick={() => setSidePanelOpen((state) => !state)} className="">
          {sidePanelOpen ? (
            <Image src="/icons/close.svg" width={40} height={100} alt="menu" />
          ) : (
            <Image src="/icons/menu.svg" width={40} height={100} alt="menu" />
          )}
        </button>
      </div>
      <div className={`${!sidePanelOpen ? "translate-x-[100%]" : ""} w-full lg:w-1/6 transition-transform h-screen bg-white absolute top-0 right-0 z-0`}>
        <SidePanel />
      </div>
    </div>
  );
};
const SidePanel = () => {
  const sidelinks = [
    { title: "Padelgest", value: "/" },
    { title: "Credentials", value: "/" },
    { title: "Max", value: "/" },
    { title: "custom", value: "/" },
    { title: "smart court", value: "/" },
    { title: "ingernia", value: "/" },
    { title: "Soprte international", value: "/" },
    { title: "media gallery", value: "/" },
    { title: "distruibution", value: "/" },
    { title: "actualdid", value: "/" },
    { title: "contacto", value: "/" },
  ];
  return (
    <div className="flex flex-col text-black  p-10 uppercase gap-2 pt-32 font-normal justify-between h-full">
      <div className="flex flex-col gap-2">
        {sidelinks.map((link, index) => (
          <div className="flex flex-col group cursor-pointer">
            <span>{link.title}</span>
            <div className="w-0 group-hover:animate-expandWidth h-[2px] bg-black "></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-[2px] bg-black justify-self-end" />
        <div className="flex justify-between font-black">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
        </div>
      </div>
    </div>
  );
};
const Ref = ({ title, href }) => {
  return (
    <Link href={href} className="uppercase hover:bg-brBlack/40 transition-colors px-4 py-1 rounded-full flex items-center justify-center">
      {title}
    </Link>
  );
};

export default Navbar;
