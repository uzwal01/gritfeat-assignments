import { Link } from "react-router-dom";

interface NavBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export default function NavBar({ query, setQuery }: NavBarProps) {
  return (
    <>
      <nav className="w-full bg-purple-800 py-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-white text-2xl">MyStore</h1>
            </Link>
            <div className="">
              <ul className="flex gap-6 items-center">
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg hover:underline hover:underline-offset-4 transition-all delay-3s"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-white text-lg hover:underline hover:underline-offset-4 transition-all delay-3s"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <input
                type="text"
                name="search"
                className="block outline-none rounded py-1 px-2 text-white border bg-purple-600"
                placeholder="Search Products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
