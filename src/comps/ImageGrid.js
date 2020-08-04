import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="image-gird">
      {docs &&
        docs.map((image) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(image.url)}
            className="image-wrapper"
            key={image.id}
          >
            <img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={image.url}
              alt="test"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
