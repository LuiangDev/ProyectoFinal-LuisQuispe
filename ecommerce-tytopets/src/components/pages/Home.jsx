import React from "react";
import { Hero } from "../pages/hero/Hero";
import { ItemListContainer } from "./itemlistcontainer/ItemListContainer";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Hero />
      </div>
      <ItemListContainer />

    </div>
  );
}
