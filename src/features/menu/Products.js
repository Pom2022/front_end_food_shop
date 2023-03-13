import ProductsItems from "./ProductsItems";

function Products({ products }) {
  return (
    <div className="bg-gray-50 py-6 px-4 flex justify-between   ">
      {products.map((el, index) => {
        if (index > 3) {
          return null;
        }

        return <ProductsItems key={el.id} product={el} />;
      })}
    </div>
  );
}

export default Products;
