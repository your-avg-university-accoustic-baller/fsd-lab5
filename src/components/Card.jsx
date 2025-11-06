import React from "react";

export default function Card({ image, country, map, title, date, desc }) {
  return (
    <div className="flex gap-4">
      <img src={image} alt={title} className="w-28 h-36 object-cover rounded-lg" />
      <div>
        <p className="text-xs text-gray-600 uppercase tracking-wide">
          <span className="text-red-500 mr-2">📍</span>{country}
          <a href={map} target="_blank" rel="noreferrer" className="text-gray-400 underline ml-2">
            View on Google Maps
          </a>
        </p>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-xs font-semibold mt-1">{date}</p>
        <p className="text-sm mt-2 text-gray-700">{desc}</p>
      </div>
    </div>
  );
}
