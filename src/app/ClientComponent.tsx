"use client";

import { useState } from "react";
import { RSC } from "./RSC";

export function ClientComponent() {
  const [x] = useState(0);
  return (
    <div>
      <span>Client Component: state {x}</span>
      <RSC />
      <hr />
    </div>
  );
}
