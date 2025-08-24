import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "../components/ui/card";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

async function fetchProducts(page: number) {
  const res = await fetch(
    `https://fakestoreapi.com/products?limit=all&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products!");
  }
  return res.json();
}

export default function Dashboard() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  //Fetch Data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: fetchProducts,
  });

  // Delete Mutation (optimistc update)
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
    },
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["products", page] });
      const prevData = queryClient.getQueryData(["products", page]);
      queryClient.setQueryData(["products", page], (old: any) =>
        old.filter((p: any) => p.id !== id)
      );
    },
    onError: (_err, _id, context) => {
      queryClient.setQueryData(["products", page], context?.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products", page] });
    },
  });

  {
    /* Create mutation */
  }
  const createMutation = useMutation({
    mutationFn: async (newProduct: any) => {
      return fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", page] });
      setNewTitle("");
      setNewPrice("");
      setNewImage("");
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: number; updates: any }) => {
      return fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  {
    /* Local state for new product form */
  }
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div className="h-full">
      <nav className="w-full text-black bg-zinc-50 p-5 shadow-lg">
        <ul className="flex justify-end items-center gap-4 font-semibold">
          <li>
            <a href="/dashboard">Products</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Product Card */}
      <div>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Products</h1>

          {/* Add Product Dialog */}
          <div className="">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add Product</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Product</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    createMutation.mutate({
                      title: newTitle,
                      price: parseFloat(newPrice),
                      image: newImage,
                    });
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <Label className="mb-2">Title</Label>
                    <Input
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Product title"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2">Price</Label>
                    <Input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      placeholder="Product price"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2">Image URL</Label>
                    <Input
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      placeholder="https://example.com/product.jpg"
                      required
                    />
                  </div>

                  <Button
                    className="mt-2"
                    type="submit"
                    disabled={createMutation.isPending}
                  >
                    {createMutation.isPending ? "Adding..." : "Add Product"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {data.map((product: any) => (
            <Card key={product.id} className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-40 object-contain"
              />
              <h2 className="font-semibold line-clamp-1">{product.title}</h2>
              <p className="font-semibold text-gray-600">
                <span className="text-yellow-500">$ </span>
                {product.price}
              </p>
              <div className="flex justify-start items-center gap-2">
                <Button
                  className="mt-2 w-1/4 bg-zinc-300 text-black hover:text-white"
                  onClick={() => updateMutation.mutate(product.id)}
                >
                  Update
                </Button>
                <Button
                  className="mt-2 w-1/4"
                  onClick={() => deleteMutation.mutate(product.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center py-4">
        <Button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </Button>
        <span className="mx-2">Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
