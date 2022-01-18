import React, { useState } from "react";
import "./kategori.css";

const Kategori = () => {
  let kategoris = [
    { kategori: "Pantai", link: "/" },
    { kategori: "Gunung", link: "/" },
    { kategori: "Dataran Tinggi", link: "/" },
    { kategori: "Sungai", link: "/" },
    { kategori: "Danau", link: "/" },
    { kategori: "Air Terjun", link: "/" },
    { kategori: "Sungai", link: "/" },
    { kategori: "Taman", link: "/" },
    { kategori: "Wahana", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="py-16 2xl:px-96 xl:px-32 lg:px-24 md:px-8 px-3">
      <div className="max-w-7xl">
        <div className="mb-60 p-8 rounded-lg" id="box-shadow">
          <div className="flex justify-between h-auto items-center text-emerald-800 text-xl mb-3">
            <span className="">Kategori</span>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <ion-icon name={open ? "chevron-down-outline" : "chevron-forward-outline"}></ion-icon>
            </div>
          </div>

          <div
            className={`h-auto w-full" ${
              open
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1"
                : "grid grid-rows-1 grid-flow-col overflow-x-auto"
            }`}
            id="kategori"
          >
            {kategoris.map((link) => (
              <div className={`w-40 h-60 bg-emerald-200 rounded-lg mr-3 mb-2 ${open ? "" : "inline-block"}`}>
                <li key={link.kategori} className="h-full w-full rounded-md p-2 relative">
                  <a href={link.link}>
                    <div className="absolute bottom-2 bg-white h-16 rounded-md" id="kategori-name">
                      <div className="flex justify-center items-center h-full w-full text-xl  text-emerald-700 text-center flex-col font-semibold">
                        {link.kategori}
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
