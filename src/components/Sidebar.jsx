import { Link } from "react-router-dom";
import userIcon from "../assets/pngs/user.png";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#000000ce] ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 z-40"
        onClick={onClose}
      ></div>
      <div className="w-[85%] sm:w-[70%] md:w-[364px] h-full bg-white flex flex-col overflow-y-auto z-50 relative">
        <button className="w-full px-4 py-3 bg-[#222F3E] text-white font-bold text-sm sm:text-lg flex gap-2 items-center">
          <img src={userIcon} alt="User Icon" />
          Hello, Vinayak
        </button>
        {sidebarData.map((data, index) => (
          <ContentContainer key={index} data={data} />
        ))}
      </div>
      <button
        className="absolute top-2 right-2 h-10 w-10 rounded-full bg-[#00000080] text-white flex items-center justify-center z-50"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

function ContentContainer({ data }) {
  return (
    <div className="px-4 py-2 border-b border-gray-300">
      <div className="text-sm sm:text-base font-bold text-[#111]">{data?.title}</div>
      <ul className="mt-2">
        {data?.items?.map((item, index) => (
          <li key={index}>
            <Link
              to="/"
              className="block text-xs sm:text-sm text-[#111] py-2 hover:text-blue-600"
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const sidebarData = [
  {
    title: "Trending",
    items: [
      { title: "Best Sellers" },
      { title: "New Releases" },
      { title: "Movers & Shakers" },
    ],
  },
  {
    title: "Digital Content & Devices",
    items: [
      { title: "Amazon Prime Video" },
      { title: "Kindle eBooks" },
      { title: "Amazon Prime Music" },
      { title: "Mobiles, Computers" },
    ],
  },
  {
    title: "Fashion",
    items: [
      { title: "Men's Fashion" },
      { title: "Women's Fashion" },
      { title: "Kids' Fashion" },
      { title: "Footwear" },
    ],
  },
];

export default Sidebar;
