import React from "react";
import { Link } from "react-router-dom";

function GoOrderSummaryAdmin() {
  return (
    <>
      <div className="flex justify-center flex-my-10 py-20">
        <nav>
          <Link to="/admin-order-summary">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-full
          hover:shadow-lg "
            >
              Go Order Summary
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default GoOrderSummaryAdmin;
