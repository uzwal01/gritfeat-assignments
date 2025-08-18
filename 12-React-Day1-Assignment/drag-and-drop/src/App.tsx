import { useState } from "react";
import "./style.css";
function Home() {
  const [listA, setListA] = useState<string[]>(["A1", "A2", "A3"]);
  const [listB, setListB] = useState<string[]>(["B1", "B2"]);

  // For Drag start: store item + source in dataTransfer
  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: string,
    source: "A" | "B"
  ) => {
    e.dataTransfer.setData("item", item);
    e.dataTransfer.setData("source", source);
  };

  // For Drop: move item from one list to another
  const onDrop = (e: React.DragEvent<HTMLDivElement>, target: "A" | "B") => {
    const item = e.dataTransfer.getData("item");
    const source = e.dataTransfer.getData("source");

    // No move if invalid or same list
    if (!item || !source || source === target) {
      return;
    }

    if (source === "A") {
      setListA((prev) => prev.filter((i) => i !== item));
      setListB((prev) => [...prev, item]);
    } else {
      setListB((prev) => prev.filter((i) => i !== item));
      setListA((prev) => [...prev, item]);
    }
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <>
      {/* Outer div */}
      <div className="flex items-center justify-center mt-[50px] gap-8 p-6">
        {/* Container A */}
        <div
          className="w-48 min-h-[300px] border border-black bg-gray-100"
          onDragOver={allowDrop}
          onDrop={(e) => onDrop(e, "A")}
        >
          <h3 className="font-semibold text-center">Conatainer A</h3>
          {listA.map((item) => (
            <div
            key={item}
              className="p-2 my-2 mx-2 bg-blue-300 cursor-grab rounded"
              draggable
              onDragStart={(e) => onDragStart(e, item, "A")}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Container B */}
        <div
          className="w-48 min-h-[300px] border border-black bg-gray-100"
          onDragOver={allowDrop}
          onDrop={(e) => onDrop(e, "B")}
        >
          <h3 className="font-semibold text-center">Conatainer B</h3>
          {listB.map((item) => (
            <div
            key={item}
              className="p-2 my-2 mx-2 bg-green-300 cursor-grab rounded"
              draggable
              onDragStart={(e) => onDragStart(e, item, "B")}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
