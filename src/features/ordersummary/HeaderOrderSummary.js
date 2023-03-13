import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function HeaderOrderSummary() {
  return (
    <div className="flex flex-col justify-start ml-5">
      <nav>
        <Link to="/menu">
          <motion.div whileTap={{ scale: 0.75 }}>
            <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
          </motion.div>
        </Link>
      </nav>
    </div>
  );
}

export default HeaderOrderSummary;
