import { useEffect, useState } from "react";
import { IProduct } from "./Products";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLaoding] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log("Error loading details:", error);
      } finally {
        setLaoding(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  return (
    <>
      <section className="bg-zinc-200 w-full min-h-screen">
        <div className="bg-white max-w-[1280px] mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl gap-6 justify-center items-center py-20 px-10">
          {loading ? (
            <p className="text-zinc-600">Loading..</p>
          ) : (
            product && (
              <>
                {/* image */}
                <div className="w-[30%] h-[300px] flex items-center justify-center bg-purple-300 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-60 object-contain"
                  />
                </div>
                <div className="w-[70%]">
                  <span className="text-sm uppercase font-semibold mb-2 text-purple-400">
                    {product.category}
                  </span>
                  <h1 className="text-2xl font-bold text-black mb-4">
                    {product.title}
                  </h1>
                  <p className="text-zinc-600 text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-yellow-500">
                      ${product.price}
                    </span>
                  </div>

                  <Link
                    to="/products"
                    className="px-5 py-2 bg-purple-800 text-white hover:text-purple-800 hover:bg-zinc-200 transition-colors delay-3s rounded-xl "
                  >
                    Buy Now
                  </Link>
                </div>
              </>
            )
          )}
        </div>
        <div className="text-center mt-4">
          <Link to="/products" className="text-purple-500 hover:text-zinc-600 transition-colors delay-3s ">Go Back</Link>
        </div>
      </section>
    </>
  );
}
