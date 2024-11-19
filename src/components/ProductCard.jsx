import { useContext } from "react";
import { addToCart, removeFromCart } from "../global/reusable";
import { CartContext } from "../App";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ data }) => {
  const { cart, updateCart } = useContext(CartContext);
  const product = cart.find((item) => item.product_id === data.product_id);
  const countInCart = product ? product.quantity : 0;

  const buttonStyleClass =
    "bg-[#f0c14b] border border-[#a88734] text-[#111] py-2 px-4 rounded-lg cursor-pointer flex-1 text-xs sm:text-sm";

  return (
    <div className="flex flex-col gap-2 p-2 border-2 border-[#f0f2f2] rounded-lg w-full max-w-[400px] mx-auto">
      <img
        className="h-[200px] w-full object-cover rounded-md"
        src={data.img_link}
        alt={data.product_name}
      />
      <div className="flex gap-2 justify-between">
        {countInCart ? (
          <>
            <button
              className={buttonStyleClass}
              onClick={() => addToCart(data, cart, updateCart)}
            >
              +
            </button>
            <button
              className={buttonStyleClass}
              onClick={() => removeFromCart(data, cart, updateCart)}
            >
              -
            </button>
          </>
        ) : (
          <button
            className={buttonStyleClass}
            onClick={() => addToCart(data, cart, updateCart)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
