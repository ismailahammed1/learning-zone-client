// @ts-nocheck
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/useContext";

const Leftsaidnav = () => {
  const { categories } = useContext(AuthContext);

  return (
    <div className="">
      <h4>Course Category:</h4>
      <ul className="menu bg-base-100 text-left w-60">
        <li>
          {categories.map((category) => (
            <p key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Leftsaidnav;
