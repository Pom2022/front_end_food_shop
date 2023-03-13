import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SubmitOrderButton() {
  return (
    <div className="flex flex-row justify-center">
      <nav>
        <Link to="/approved-page">
          <div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-80 p-2  rounded-full bg-gradient-to-tr  from-indigo-500 to-indigo-700 text-gray-50 text-lg my-2
          hover:shadow-lg transition-all duration-150 ease-out"
            >
              Order Submit
            </motion.button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default SubmitOrderButton;
