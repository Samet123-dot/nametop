import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SearchBar({ search, setSearch }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Kullanıcı adı ara..."
          className="w-full border border-primary dark:border-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-800 dark:text-white transition-all"
        />
        <FaSearch className="absolute left-3 top-3 text-primary dark:text-secondary" />
      </div>
    </motion.div>
  );
}