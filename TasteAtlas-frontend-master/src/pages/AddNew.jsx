import React, { useState } from "react";
import Navbar from "../components/Navbar";
import recipe from "../assets/recipe.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Veg");
  const [link, setLink] = useState("");
  const User = useAuth0();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const user = User.user.given_name;
    e.preventDefault();
    try {
      const body = { user, title, country, description, link, category };
      const resp = await fetch(`https://tasteatlas-backend.onrender.com/newPost`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await resp.json();
      // setRecipe(jsonData);
      // redirect("/dashboard");
    } catch (err) {
      console.error(err.message);
    }
    navigate("/dashboard");
  };

  //radio button event handler
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col ml-0 md:ml-60">
        <h1 className="text-3xl font-bold text-center mt-6">
          Share your recipe with the whole world!
        </h1>
        <div className="flex flex-col md:flex-row justify-center mt-4 p-4 md:p-10 space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-gray-50 opacity-70 rounded-sm flex-grow p-4">
            <h1 className="text-3xl font-extrabold text-center">Add your recipe</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-black">
                  Dish name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input-style"
                  placeholder="Enter name"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />

                <label htmlFor="country" className="pt-4 block text-lg text-black">
                  Country of origin
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="input-style"
                  placeholder="Enter country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />

                <label htmlFor="steps" className="pt-4 block text-lg text-black">
                  Description/Steps
                </label>

                <textarea
                  id="steps"
                  rows={1}
                  cols={50}
                  name="steps"
                  defaultValue="Steps to make this dish are..."
                  className="input-style"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <div>
                  <label className="pt-4 block text-lg text-black">
                    Select dish type
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Veg"
                      name="category"
                      checked={category === "Veg"}
                      onChange={handleChange}
                    />
                    Veg
                  </label>
                  <label className="ml-3">
                    <input
                      type="radio"
                      value="Non-Veg"
                      name="category"
                      checked={category === "Non-Veg"}
                      onChange={handleChange}
                    />
                    Non-Veg
                  </label>
                </div>

                <label htmlFor="video" className="pt-4 block text-lg text-black">
                  Youtube Video tutorial link (optional)
                </label>
                <input
                  id="video"
                  name="video"
                  type="text"
                  className="input-style"
                  placeholder="Enter video link"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />

                <button
                  type="submit"
                  className="bg-[#507b14] text-white mt-4 md:mt-2 w-full md:w-36 py-2 text-center rounded-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <img className="w-full md:w-72 rounded-md" src={recipe} alt="Recipe" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddNew;
