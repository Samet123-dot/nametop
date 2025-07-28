import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full"
      />
      <span className="ml-4 text-primary dark:text-secondary font-bold">Yükleniyor...</span>
    </div>
  );
}