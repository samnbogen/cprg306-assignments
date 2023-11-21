import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
    //query a subcollection named items under a document in the users collection with the same userId
    //it adds an object to the items array containing the document ID and data. It then returns this items array.
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;    
};

const addItem = async (userID, item) => {
    //uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. It returns the id of the newly created document.
    const docRef = await addDoc(collection(db, "users", userID, "items"), item);
    return docRef.id;
};