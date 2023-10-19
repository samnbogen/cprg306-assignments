"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({items}) {


  const [sortby, setSortby] = useState("name");

  if (sortby === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortby === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleName = () => {
    setSortby("name");
  }

  const handleCategory = () => {
    setSortby("category");
  }

  return (
    <div>
      <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded focus:bg-sky-500 m-4 p-2" onClick={handleName}>Sort by Name</button>
      <button className="bg-sky-800 text-white font-bold py-2 px-4 rounded focus:bg-sky-500 m-4 p-2" onClick={handleCategory}>Sort by Category</button>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
  
}