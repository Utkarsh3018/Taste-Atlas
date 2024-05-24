import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  const [info, setInfo] = useState([]);

  const renderCard = async () => {
    try {
      const response = await fetch(
        `https://tasteatlas-backend.onrender.com/getrecipe`
      );
      const jsonData = await response.json();
      setInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    renderCard();
  }, []);

  return (
    <div className="h-auto md:h-screen text-[#0d0a0b]">
      <Navbar />

      <Searchbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {info.map((info) => (
          <RecipeCard
            key={info.id}
            country={info.country}
            dish={info.title}
            category={info.category}
            description={info.description}
            link={info.link}
            user={info.user}
            className="w-full md:w-1/2 lg:w-1/4"
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
