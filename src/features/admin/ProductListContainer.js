import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import * as productservice from "../../apis/createProduct-api";

function ProductListContainer({ products, setProducts }) {
  const handleOnClick = async (foodproductid) => {
    const res = await productservice.deleteFoodProduct(foodproductid);
    console.log(res.data);
    setProducts(res.data.newFoodProducts);
  };
  console.log(products);
  return (
    <>
      {products.map((item, index) => {
        if (index > 10) {
          return null;
        }
        return (
          <div className=" flex  items-center justify-between px-4 py-2 cursor-pointer border-y border-grey-200">
            <div className="flex flex-col py-0.5 my-0.1">
              <div>
                <p className="font-bold">{item.name}</p>
              </div>
              <div>
                <div>
                  <div>
                    <img src={item.productImage} className="w-12 " />
                  </div>

                  <div>
                    <p className="font-normal">฿{item.price}</p>
                  </div>
                </div>
                <div>
                  {" "}
                  <p className="font-normal">{item.description}</p>
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <Link to={`/admin/edit-product/${item.id}`}>
                <motion.div whileTap={{ scale: 0.75 }}>
                  <GrEdit className="text-gray-900" />
                </motion.div>
              </Link>

              <motion.div whileTap={{ scale: 0.75 }}>
                <div onClick={() => handleOnClick(item.id)}>
                  <TiDeleteOutline className="text-gray-900 text-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductListContainer;
