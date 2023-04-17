"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { GetPerson } from "./GetPerson";
import { ClientComponent } from "./ClientComponent";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const getData = async (): Promise<any> => new Promise((res) => setTimeout(() => res([{ name: "Adam" }]), 3000));

export default function Home() {
  const [x] = useState(12);
  // const people = await getData();
  return (
    <main className={styles.main}>
      <div>
        {x}
        <ClientComponent />
        <h1>Hello</h1>
        {/* {people.map((p: any) => (
        <span>{p.name}</span>
      ))} */}
      </div>
    </main>
  );
}
