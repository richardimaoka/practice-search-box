"use client";

import { startTransition, Suspense, useState } from "react";
import { ShowData } from "./ShowData";

export function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-1"
          onClick={() => {
            startTransition(() => {
              setCounter((counter) => counter + 1);
            });
          }}
        >
          Counter is {counter}
        </button>
      </p>
    </div>
  );
}
