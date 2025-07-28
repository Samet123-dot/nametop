import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    setLoading(true);
    setUsers([]);
    try {
      const profileRes = await fetch(
        `https://api.mojang.com/users/profiles/minecraft/${username}`
      );
      if (!profileRes.ok) {
        setUsers([]);
        setLoading(false);
        return;
      }
      const profile = await profileRes.json();
      setUsers([
        {
          username: profile.name,
          uuid: profile.id,
          skin: "/skins/steve.png", // Şimdilik sabit Steve skinini gösteriyoruz
          joined: "Bilinmiyor",
          bio: "Gerçekten Mojang API'den çekildi!"
        }
      ]);
    } catch (err) {
      setUsers([]);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (search.length > 2) {
      fetchUser(search);
    } else {
      setUsers([]);
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <SearchBar search={search} setSearch={setSearch} />
        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {users.length === 0 ? (
              <p className="text-center text-gray-500">Kullanıcı bulunamadı veya arama yapılmadı.</p>
            ) : (
              users.map(user => <UserCard key={user.uuid} user={user} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;