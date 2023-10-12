export default function Item({ name, quantity, category }) {
    return (
     <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
       <h3 className="text-xl font-bold">{name}</h3>
       <p>quantity: {quantity}</p>
       <p>category: {category}</p>
     </div>
   );
 }