import { React, useEffect, useState } from "react";

import MenuHeader from "../features/menu/MenuHeader";
import Popular from "../features/menu/Popular";
import Products from "../features/menu/Products";
import Promotion from "../features/menu/Promotion";
import Search from "../features/menu/Search";
import Footer from "../layout/Footer";
import * as createProductApi from "../apis/createProduct-api";
import PopulaHead from "../features/menu/PopulaHead";
import PromotionHead from "../features/menu/PromotionHead";

function MenuPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await createProductApi.getAllFoodProduct();
      setProducts(res.data.foodProducts);
    };
    fetchPost();
  }, []);

  console.log(products);
  return (
    <div className="flex flex-col justify-center ">
      <MenuHeader />
      <Search />
      <Products products={products} />
      <PromotionHead />
      <Promotion products={products} />
      <PopulaHead />
      <Popular products={products} />
      <Footer />
    </div>
  );
}

export default MenuPage;
