import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-zinc-200">
        <h1 className="text-3xl font-semibold ">Welcome to <span className="text-purple-800">My Store</span></h1>
        <p className="text-zinc-600 tracking-tighter mb-4 mt-2">Your one-stop shop for amazing products.</p>
        <Link to="/products" className="px-4 py-2 bg-purple-800 text-white hover:text-purple-800 hover:bg-zinc-200 border transition-colors delay-3s">
            View Products
        </Link>
      </div>
    </>
  );
}
