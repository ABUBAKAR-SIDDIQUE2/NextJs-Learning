"use client";
import { Fragment, useState } from "react";
import { IoCart } from "react-icons/io5";
import { Button } from "@/components/ui/button";

// export default function Home() {

//   let [counter, setCounter] = useState(0)
//   let update = ()=>{ setCounter(counter+1)}

//   return (
//    <Fragment>
//     <button onClick={update}>{counter}</button>
//    </Fragment>
//   );
// }

export default function Home() {
  let [items, setItems] = useState(0);
  let updateItems = () => {
    setItems(items + 1);
  };

  return (
    <Fragment>
      <div className="flex justify-between px-24 py-6 bg-gray-400 rounded-full">
        <div className="flex">
          <IoCart className="size-8" />
          <div className="bg-green-500 rounded-full size-5 flex items-center justify-center relative">{items}</div>
        </div>
        <Button onClick={updateItems}>add to cart</Button>
      </div>
    </Fragment>
  );
}
