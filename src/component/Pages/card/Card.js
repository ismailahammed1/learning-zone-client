// @ts-nocheck
import React from "react";
import {
  CurrencyBangladeshiIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Card = ({ category }) => {
  console.log(category);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-96 w-80 ">
        <figure className="">
          <img className="h-40" src={category.logo} alt="cover" />
        </figure>
        <div className="card-body text-start mt-5">
          <h2 className="card-title">{category.name}</h2>
          <p>{category.description}</p>
          <div className="card-actions justify-between">
            <p className="flex mt-2">
              <CurrencyBangladeshiIcon className="h-5  mr-1"></CurrencyBangladeshiIcon>
              {category.price}
            </p>
            <Link
              to={`/category/${category.id}`}
              className="flex btn btn-primary "
            >
              <ShoppingCartIcon className=" h-5 mr-1"></ShoppingCartIcon>
              <p className="mt-1"> Add to Cart</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
