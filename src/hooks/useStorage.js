import { useState, useEffect } from "react";
import { storage, firestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // storage ref
    const storageRef = storage.ref(file.name);
    // collection ref
    const collectionRef = firestore.collection("images");
    // upload file
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const fileUrl = await storageRef.getDownloadURL();
        console.log(timestamp);
        const createAt = timestamp();

        collectionRef.add({ url: fileUrl, createAt });
        setUrl(fileUrl);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
