import React from "react";
import Card from "./components/Card";

const data = [
  {
    country: "JAPAN",
    map: "https://www.google.com/maps/place/Mount+Fuji",
    title: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan, 2021",
    desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    image: "https://scrimba.com/links/travel-journal-japan-image-url"
  },
  {
    country: "AUSTRALIA",
    map: "https://www.google.com/maps/place/Sydney+Opera+House",
    title: "Sydney Opera House",
    date: "27 May, 2021 - 8 Jun, 2021",
    desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    image: "https://scrimba.com/links/travel-journal-australia-image-url"
  },
  {
    country: "NORWAY",
    map: "https://www.google.com/maps/place/Geirangerfjord",
    title: "Geirangerfjord",
    date: "01 Oct, 2021 - 18 Nov, 2021",
    desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    image: "https://scrimba.com/links/travel-journal-norway-image-url"
  }
];

export default function App() {
  return (
    <div className="bg-white w-[500px] mx-auto rounded-2xl shadow-lg overflow-hidden my-10">
      <header className="bg-red-500 text-white text-center py-3 font-semibold">
        my travel journal.
      </header>
      <div className="p-5 space-y-8">
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
