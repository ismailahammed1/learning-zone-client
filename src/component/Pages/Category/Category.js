// @ts-nocheck
import Leftsaidnav from "../Shared/LeftSaidNav/LeftSaidNav";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/useContext";
import Card from "../card/Card";

const Category = () => {
  const { categories } = useContext(AuthContext);
  console.log(categories);
  return (
    <div className="  lg:flex sm:grid-cols-1 gap-5">
      <div className="ml-5 m-0 ">
        <Leftsaidnav></Leftsaidnav>
      </div>

      <div className="grid lg:grid-cols-3  gap-5 ml-5">
        {categories.map((category) => (
          <Card key={category.id} category={category}></Card>
        ))}
      </div>
    </div>
  );
};

export default Category;
