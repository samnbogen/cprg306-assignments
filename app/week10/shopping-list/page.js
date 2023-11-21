"use client"

import ItemList from "./item-list";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItems } from "../_services/shopping-list-service.js";


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);
  const [mealIdea, setMealIdea] = useState("");

  const handleAddItem = (newItem) => {
    addItems(user.uid, newItem).then(() => {
      loadItems();
    });
  };

  async function loadItems() {
    getItems(user.userID).then((data) => {
      setItems(data);
    });
  }

  function handleItemSelect(item) {
    let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setMealIdea(name);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return (
    <main>      
      {user ? (
        <>
          <div className="flex">
            <NewItem onAddItem={handleAddItem} />
            <MealIdea ingredient={mealIdea} />
          </div>
          <h1 className="text-4xl font-bold m-6 text-green-600">
            Shopping List
          </h1>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </>    
      ) : (          
        <div>
          <p className='text-white font-bold'> 
            You Have to sign in!
          </p>
        </div>
      )} 
    </main>
  );
}