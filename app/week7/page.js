"use client"

import ItemList from "./item-list";
import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";

export default function Page() {
    // read the items.json file and store the data in a variable called items
    const [items, setItems] = useState(itemsData);
    const [mealIdea, setMealIdea] = useState([]);

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
      let newItems = items.filter((i) => i.id !== item.id);
      setItems(newItems);
    }

    return (
      <main>
        <div className="flex">
          <NewItem onAddItem={handleAddItem} />
          <MealIdea ingredient={handleItemSelect} />
        </div>
        <h1 className="text-4xl font-bold m-6 text-green-600">
        Shopping List
        </h1>
        <ItemList items={items} />
      </main>
    );
  }