// @ts-nocheck
import Pdf from "react-to-pdf";

import {
  CurrencyBangladeshiIcon,
  EyeIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ref = React.createRef();
const SelectCourse = () => {
  const courseData = useLoaderData();
  console.log(courseData.price);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl grid  grid-cols-1">
      <p className="text-purple-600 dark:text-gray-50  font-extrabold text-4xl">
        {courseData.name}
      </p>
      <div className="lg:w-3/6 lg:ml-80 ">
        <figure>
          <img src={courseData.logo} alt="Album" />
        </figure>
      </div>
      <div ref={ref} className="card-body">
        <p className="text-gray-600 dark:text-gray-100 font-semibold text-2xl mt-4 ml-40 mr-40">
          {courseData.descripMOre}
        </p>
        <div>
          <ul className=" text-gray-600 dark:text-gray-100 w-full mt-6 mb-6 text-xl font-semibold">
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.aaa}
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.bbb}
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.ccc}
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.ddd}
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.eee}
            </li>
            <li className="mb-3 flex items-center ">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {courseData.fff}
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <StarIcon className="h-10"></StarIcon>
            <StarIcon className="h-10"></StarIcon>
            <StarIcon className="h-10"></StarIcon>
            <StarIcon className="h-10"></StarIcon>
            <StarIcon className="h-10"></StarIcon>
            <p className="text-xl m-2">{courseData.reviews}</p>
          </div>
          <div className="flex">
            <EyeIcon className="h-10"></EyeIcon>
            <p className="text-lg  m-2">Total Buy:{courseData.total}</p>
          </div>
        </div>
        <div className="card-actions justify-between">
          <div className="flex">
            <Link to="regis" className="flex btn btn-primary ">
              <ShoppingCartIcon className=" h-5 mr-1"></ShoppingCartIcon>
              <p className="mt-1"> Add to Cart</p>
            </Link>
            <CurrencyBangladeshiIcon className="h-8 mr-2 mt-2"></CurrencyBangladeshiIcon>
            <p className="flex mt-3 mr-1 text-lg">{courseData.price}</p>
          </div>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="flex btn btn-primary" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </div>
  );
};
export default SelectCourse;
