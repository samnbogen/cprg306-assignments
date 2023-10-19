"use client"

import ItemList from "./item-list";
import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";



export default function Page() {
    // read the items.json file and store the data in a variable called items
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    };

    return (
      <main>
        <NewItem onAddItem={handleAddItem} />
        <h1 className="text-4xl font-bold m-6 text-green-600">
        Shopping List
        </h1>
        <ItemList items={items} />
      </main>
    );
  }