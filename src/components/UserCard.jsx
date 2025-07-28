import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function UserCard({ user }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(20, 184, 166, 0.15)" }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all border border-secondary/10 dark:border-gray-700"
    >
      <div className="relative">
        <img
          src={user.skin}
          alt={`${user.username} skin`}
          className="w-24 h-24 rounded-full mb-4 border-4 border-primary dark:border-secondary shadow-md transition-all"
        />
        {user.favorite && (
          <FaStar className="absolute top-2 right-2 text-accent text-xl" title="Favori" />
        )}
      </div>
      <h2 className="font-semibold text-xl text-primary dark:text-secondary">{user.username}</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-2">UUID: <span className="font-mono">{user.uuid}</span></p>
      <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{user.bio}</p>
      <span className="px-3 py-1 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent text-xs">
        Katılım: {user.joined}
      </span>
      {/* Detay sayfası için buton eklenebilir */}
    </motion.div>
  );
}