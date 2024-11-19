import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../index.css";

// CategoryFilters Component
export default function CategoryFilters({ toggleSidebar }) {
  const categories = [
    "Fresh",
    "MX Player",
    "Sell",
    "Gift Cards",
    "Amazon Pay",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Today's Deals",
    "Browsing History",
    "Customer Service",
    "Home Improvement",
    "Kindle eBooks",
    "Mobiles",
    "Books",
    "New Releases",
    "Best Sellers",
    "Beauty & Personal Care",
    "Electronics",
    "Subscribe & Save",
    "Sports, Fitness & Outdoors",
    "Prime",
    "Home & Kitchen",
    "Fashion",
    "Computers",
    "Toys & Games",
    "Car & Motorbike",
    "Baby",
    "Pet Supplies",
    "Video Games",
  ];

  return (
    <ul className="category-filters flex overflow-x-scroll bg-slate-800 text-white space-x-4 p-4 py-8 items-center sm:py-4 sm:px-2">
      <li
        className="flex-shrink-0 p-2.5 rounded-sm cursor-pointer hover:bg-white hover:text-black"
        onClick={toggleSidebar}
      >
        All
      </li>
      {categories.map((category, index) => (
        <li
          key={index}
          className="flex-shrink-0 p-2.5 rounded-sm cursor-pointer hover:bg-white hover:text-black"
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
