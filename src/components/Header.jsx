import React, { useState, useContext } from "react";
import AmazonLogo from "../assets/vectors/amazon-in.svg";
import CartIcon from "../assets/vectors/cart-new.svg";
import locationIcon from "../assets/vectors/location.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

// Header Component
export default function Header() {
  const { size: cartSize } = useContext(CartContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for mobile search visibility

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Fashion", value: "fashion" },
    { label: "Home", value: "home" },
    { label: "Grocery", value: "grocery" },
  ];

  const accountOptions = [
    { label: "Account & Lists", value: "accounts" },
    { label: "Orders & Returns", value: "orders" },
    { label: "Try Prime", value: "prime" },
  ];

  const optionMapper = ({ label, value }, index) => (
    <option key={index} value={value}>
      {label}
    </option>
  );

  return (
    <div>
      {/* Header Navbar */}
      <div className="flex flex-wrap gap-1 items-center px-4 py-2 bg-[#131921]">
        <Link to={"/"}>
          <HeaderContainer>
            <img
              className="w-32 max-h-[50px]"
              src={AmazonLogo}
              alt="Amazon Logo"
            />
          </HeaderContainer>
        </Link>

        <HeaderContainer>
          <div className="h-full flex gap-1 items-center p-0.5">
            <img
              className="pb-1 h-7 self-end"
              src={locationIcon}
              alt="Location Icon"
            />
            <div className="flex flex-col gap-0.5 text-white">
              <span className="text-xs font-normal">Delivering to Manipur</span>
              <span className="text-sm font-bold">Update Location</span>
            </div>
          </div>
        </HeaderContainer>

        {/* Search Bar */}
        <div className="w-full md:w-auto min-h-10 flex items-center justify-between rounded bg-white overflow-hidden flex-1">
          {/* Search Input (Always visible on desktop) */}
          <div className="flex items-center flex-1">
            <select className="w-1/4 min-h-full p-2 border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-sm">
              {filterOptions.map(optionMapper)}
            </select>
            <input
              className="min-h-full p-2 border-none text-[#111] text-sm flex-1"
              type="search"
              placeholder="Search Amazon.in"
              style={{ display: isSearchOpen || window.innerWidth >= 768 ? "block" : "none" }} // Show search input based on state or width
            />
          </div>

          {/* Search Button (Only visible on mobile, aligned to the right on mobile) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)} // Toggle search input visibility for mobile
            className="h-full py-2 px-4 border-none bg-[#febd68] text-black text-sm flex items-center justify-center ml-2 "
          >
            Search
          </button>
        </div>

        {/* Language Selector */}
        <HeaderContainer>
          <select className="h-fit flex p-2 text-sm font-bold items-end text-white bg-black">
            <option value={"en"}>🇺🇸 EN</option>
            <option value={"hi"}>🇮🇳 HI</option>
          </select>
        </HeaderContainer>

        {/* Account Dropdown */}
        <HeaderContainer>
          <div className="h-full flex justify-center items-start flex-col gap-0.5 text-white bg-black">
            <span className="text-xs font-normal px-1 bg-black">
              Hello, Vinayak
            </span>
            <select className="text-sm font-bold p-0 m-0 bg-black">
              {accountOptions.map(optionMapper)}
            </select>
          </div>
        </HeaderContainer>

        {/* Returns & Orders Button */}
        <HeaderContainer>
          <button className="h-full flex justify-center items-start flex-col gap-0.5 p-1 text-white bg-transparent">
            <span className="text-xs font-normal">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </button>
        </HeaderContainer>

        {/* Cart Link */}
        <Link to={"/cart"}>
          <HeaderContainer>
            <div className="h-full flex items-end p-1 text-white relative">
              <div className="flex gap-1 items-center">
                <img className="w-10" src={CartIcon} alt="Cart Icon" />
                <span className="absolute top-[-4px] left-[22px] text-base font-bold text-[#f08806]">
                  {cartSize}
                </span>
              </div>
              <span className="text-sm font-bold py-0.5 translate-y-2">
                Cart
              </span>
            </div>
          </HeaderContainer>
        </Link>
      </div>
    </div>
  );
}

const HeaderContainer = ({ children }) => {
  return (
    <div className="min-h-full flex p-1 items-end self-stretch rounded-sm outline-none hover:outline-[1.4px] hover:outline-white active:outline-[1.4px] active:outline-white">
      {children}
    </div>
  );
};
