"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [x, setX] = useState(0);

  useEffect(() => {
    setTimeout(() => setX((x) => x + 1), 2000);
  }, []);

  return (
    <html lang="en">
      <body>
        {x}
        {children}
      </body>
    </html>
  );
}
