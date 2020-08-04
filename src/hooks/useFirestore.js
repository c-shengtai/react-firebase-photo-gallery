import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // on snapshot will return unsubscribed function
    const unsubscribed = firestore
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snapshot) => {
        const documents = snapshot.docs.reduce((acc, doc) => {
          return [...acc, { id: doc.id, ...doc.data() }];
        }, []);
        setDocs(documents);
      });
    // unsubscribed firestore collection
    return () => unsubscribed();
  }, [collection]);

  return { docs };
};

export default useFirestore;
