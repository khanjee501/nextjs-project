"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setcount] = useState(0);

  return (
    <div>
      <p>There are {users.length} users.</p>
      <button onClick={() => setcount((c) => c + 1)}>{count}</button>
    </div>
  );
}
