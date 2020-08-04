import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const onClickBackdrop = (e) => {
    if (!e.target.classList.contains("backdrop")) return;
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClickBackdrop}
      className="backdrop"
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImage}
        alt="modal pic"
      />
    </motion.div>
  );
};

export default Modal;
