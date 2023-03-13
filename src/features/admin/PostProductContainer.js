// import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PostProductContainer() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center flex-my-10 pt-20 flex-col">
      <nav>
        <Link to="/admin/post-product">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-full
          hover:shadow-lg "
          >
            Create Product
          </button>
        </Link>
      </nav>

      <nav className="border-2 text-center w-[100%]">
        <Link to="/login">
          <button
            type="button"
            className="bg-blue-500 w-[250px] hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-full
          hover:shadow-lg "
            onClick={handleLogout}
          >
            logout
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default PostProductContainer;

// class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"

{
  /* <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-full p-2 rounded-full bg-gradient-to-tr  from-orange-400 to-orange-600 text-gray-50 text-lg my-2
          hover:shadow-lg transition-all duration-150 ease-out"
        >
          Create Product
        </motion.button> */
}
