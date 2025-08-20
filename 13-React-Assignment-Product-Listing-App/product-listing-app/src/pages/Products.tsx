import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type ProductProps = {
  query: string;
};
export default function Products({ query }: ProductProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filtered, setFiltered] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // if not query display all products
    if (!query) {
        setFiltered(products);
        return;
    }

    // Display only searched query/product
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredProducts);
  }, [query, products]);

  // leads to particular product page
  const productDetails = (product: IProduct) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <section className="bg-zinc-200 w-full min-h-screen">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-2xl text-purple-800 font-semibold py-4">
            Our Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading ? (
              <p className="text-zinc-600">Loading products...</p>
            ) : filtered.length === 0 ? (
              <p className="text-zinc-600">No products found.</p>
            ) : (
              filtered.slice(0, 12).map((product) => (
                <div
                  key={product.id}
                  onClick={() => productDetails(product)}
                  className="bg-white rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="h-[300px] flex items-center justify-center bg-purple-300">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-40 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between h-40">
                    <h2 className="text-md font-semibold text-purple-800 line-clamp-1">
                      {product.title}
                    </h2>
                    <p className="text-sm text-zinc-600 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
