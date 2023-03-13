import React from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";

import { FaCcVisa } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Footer from "../layout/Footer";

function ApprovedPage() {
  return (
    <div>
      <div className="flex flex-col justify-start ml-5 mt-2">
        <nav>
          <Link to="/menu">
            <motion.div whileTap={{ scale: 0.75 }}>
              <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
            </motion.div>
          </Link>
        </nav>
      </div>
      <div className="py-64 flex flex-row justify-center ">
        <div className="flex flex-col justify-center ">
          <div className="text-7xl text-green-500 mb-1 ml-7">
            <AiOutlineCheckCircle />
          </div>
          <div className="text-3xl font-bold mb-4 ">Approved</div>
          <div className="flex flex-row justify-between">
            <div>
              <FaCcVisa className="font-normal text-3xl text-indigo-600 my-2" />
            </div>
            <div className="mt-2">4242</div>

            <div className="mt-2">09/25</div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ApprovedPage;
