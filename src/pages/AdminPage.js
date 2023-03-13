import React, { useState, useEffect } from "react";
import PostProductContainer from "../features/admin/PostProductContainer";
import ProductListContainer from "../features/admin/ProductListContainer";
import * as createProductApi from "../apis/createProduct-api";
import GoOrderSummaryAdmin from "../features/admin/GoOrderSummaryAdmin";

function AdminPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await createProductApi.getAllFoodProduct();
      setProducts(res.data.foodProducts);
    };
    fetchPost();
  }, []);
  return (
    <div className=" flex flex-col">
      <PostProductContainer />
      <GoOrderSummaryAdmin />

      <ProductListContainer products={products} setProducts={setProducts} />
    </div>
  );
}

export default AdminPage;
