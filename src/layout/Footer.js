import React from "react";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/use.Cart";

function Footer() {
  const { logout } = useAuth();
  const { state } = useCart();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  const initial = 0;
  const totalQuantity = state.reduce(
    (accumulator, current) => accumulator + current.quantity,
    initial
  );

  console.log(totalQuantity);
  return (
    <>
      <Outlet />

      <div className="relative flex flex-row  items-center justify-between">
        <nav>
          <Link to="/cart-page">
            <MdOutlineShoppingCart className="text-textColor text-2xl mt-3 mx-3 cursor-pointer" />

            <div className="absolute -bottom-1 -left-0 mx-4 my-4  w-5 h-5 rounded-full bg-cartNumBg"></div>
            <p className=" absolute -bottom-1 -left+3 mx-3 my-4 pl-4 text-xs text-black font-semibold">
              {totalQuantity}
            </p>
          </Link>
        </nav>
        <div>
          <nav>
            <Link to="/">
              <BiHomeAlt className="text-textColor text-2xl mt-3 mx-3 cursor-pointer " />
            </Link>
          </nav>
        </div>
        <div>
          <BiSearch className="text-textColor text-2xl mt-3 mx-3 cursor-pointer" />
        </div>
        <nav>
          <Link to="/">
            <div onClick={handleLogout}>
              <AiOutlineLogout className="text-textColor text-2xl mt-3 mx-3 cursor-pointer" />
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}
export default Footer;
