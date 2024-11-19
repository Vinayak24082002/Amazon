import { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import DropDownIcon from "../assets/vectors/chevron-down-dark.svg";
import { changeCartSelection } from "../global/reusable";

const Cart = () => {
  const { cart: cartData, updateCart, subtotal } = useContext(CartContext);
  const [emiDetailsOpen, setEmiDetailsOpen] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const selectedItems = cartData.filter((item) => item.selected);
  const freeDeliveryThreshold = 499;
  const isEligibleForFreeDelivery = subtotal >= freeDeliveryThreshold;
  const remainingAmount = freeDeliveryThreshold - subtotal;

  const updateProgressBar = () => {
    const newProgressWidth = selectedItems.length === 0 ? 0 : (subtotal / freeDeliveryThreshold) * 100;
    setProgressWidth(newProgressWidth);  
  };

  const handleItemSelectionChange = (data) => {
    changeCartSelection(data, cartData, updateCart); 
    updateProgressBar(); 
  };

  useEffect(() => {
    updateProgressBar(); 
  }, [subtotal, cartData]);  

  return (
    <div className="cart flex flex-col sm:flex-row items-start p-3 bg-[#e9eded] gap-6 overflow-auto">
      {/* Left Column: Cart Items */}
      <div className="min-w-[642px] max-w-[1180px] w-full flex flex-col justify-center gap-3 p-4 bg-white">
        <div className="flex flex-col gap-1 justify-start items-start">
          <h2 className="text-[28px]">Shopping Cart</h2>
          <span>
            {selectedItems.length === 0 && "No items selected."}
            <button className="text-sm text-[#007185] hover:text-[#C7501F] hover:underline">
              {selectedItems.length === cartData.length ? "Deselect" : "Select"} all items
            </button>
          </span>
          <button onClick={() => updateCart([])} className="text-sm mt-2 px-4 py-1 border rounded-md">
            Empty Cart
          </button>
        </div>

        <div className="h-px w-full border my-4" />

        <div className="flex flex-col">
          {cartData.map((product) => (
            <CartProduct
              key={product.product_id}
              data={product}
              cartData={cartData}
              updateCart={updateCart}
              onSelectionChange={handleItemSelectionChange}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Delivery and Suggested Products */}
      <div className="min-w-[300px] w-full sm:w-[300px] text-[#0F1111] flex flex-col gap-6 ml-20 mt-6 sm:mt-0">
        <div className="w-full p-5 pb-6 bg-white rounded flex flex-col gap-5">
          <div className="is-free-delivery flex flex-col gap-1">
            <div className="w-full flex items-center gap-1">
              <div className="h-4 text-sm w-full rounded-md border border-[#067D62] bg-white overflow-hidden">
                <div className={`h-4 bg-[#067D62]`} style={{ width: `${progressWidth}%` }} />
              </div>
              ₹499
            </div>
            <div className="text-xs flex justify-start items-start gap-2">
              <input
                type="checkbox"
                className="bg-[#067D62] rounded-full my-2"
                checked={isEligibleForFreeDelivery}
                disabled
              />
              <span className="w-full flex-1 flex flex-wrap">
                <strong className="text-[#067D62]">
                  {isEligibleForFreeDelivery
                    ? "Your order is eligible for FREE Delivery."
                    : `Add ₹${remainingAmount} more to qualify for FREE Delivery.`}
                </strong>{" "}
                {isEligibleForFreeDelivery ? (
                  <span>Choose FREE Delivery option at checkout.</span>
                ) : (
                  <span>
                    Add more items to your cart to become eligible for free delivery.
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className="text-lg cart-total flex flex-wrap gap-2">
            <span className="w-full flex flex-wrap">
              Subtotal ({cartData.length} items): <strong>₹{subtotal}</strong>
            </span>
            <div className="flex items-center gap-1 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              This order contains a gift
            </div>
          </div>
          <button className="rounded-full text-sm py-1 pb-1.5 px-1.5 bg-[#ffd814]">
            Proceed to Buy
          </button>
          <div className="text-sm border rounded flex flex-col gap-5 mt-4">
            <div
              className="py-3 px-[18px] flex items-center justify-between cursor-pointer outline-none active:outline-[#017185] hover:outline-[#017185]"
              onClick={() => {
                setEmiDetailsOpen(!emiDetailsOpen);
              }}
            >
              EMI Available
              <img
                src={DropDownIcon}
                alt="drop-down-icon"
                className={`w-4 h-4 ${emiDetailsOpen && "rotate-180"} `}
              />
            </div>
            {emiDetailsOpen && (
              <div className="pb-3 px-[18px]">
                Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards, and Amazon pay balance top-up).{" "}
                <Link to={"#"} className="text-[#007185]">
                  Learn more
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Suggested Products */}
        <div className="min-w-[300px] w-full sm:w-[300px] p-5 pb-6 bg-white rounded flex flex-col gap-5">
          <span className="text-[18px] font-bold">
            Customers who bought items in your cart also bought
          </span>
          {[...cartData, ...cartData, ...cartData]
            .slice(0, 8)
            .map((product) => (
              <SuggestionCard key={product.product_id} data={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

const CartProduct = ({ data, cartData, updateCart, onSelectionChange }) => {
  const { product_name, img_link, discounted_price, quantity, selected = false } = data;

  return (
    <div className="cart-product flex gap-3 p-4 max-w-[1140px] flex-wrap">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelectionChange(data)}
        className="w-5 h-5"
      />
      <img src={img_link} className="max-w-[180px]" alt={product_name} />
      <div className="details flex flex-col ml-3">
        <div className="info">
          <div className="flex flex-col">
            <div>{product_name}</div>
          </div>
          <strong>{discounted_price}</strong>
        </div>
        <div className="controls mt-3">
          <select className="p-1 border rounded-md">
            <option>{quantity}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const SuggestionCard = ({ data }) => {
  const { product_name, img_link, discounted_price } = data;

  return (
    <div className="suggestion-card h-min flex gap-3 mb-4">
      <img src={img_link} className="max-w-[100px] h-full max-h-full" alt={product_name} />
      <div className="text-[#007185] text-sm details flex flex-col items-start gap-1">
        <span className="max-h-[40px] text-wrap truncate text-ellipsis">
          {product_name}
        </span>
        <span>⭐⭐⭐⭐⭐ 764</span>
        <span className="text-[#B12704]">{discounted_price}</span>
        <button className="w-fit text-[#0F1111] rounded-full text-sm py-0.5 pb-1 px-3.5 bg-[#ffd814]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
