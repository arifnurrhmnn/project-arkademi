import {
  CardList,
  Hero,
  ListCategory,
  ListInstitution,
  ListPromo,
  ListTestimony,
} from "components";
import React from "react";
import { VDiscount, VTrending } from "assets";

export default function Home() {
  return (
    <>
      <Hero />
      <CardList icon={VTrending} title="Trending" />
      <CardList icon={VDiscount} title="Flash Sale" time="enable" />
      <ListCategory />
      <ListPromo />
      <ListInstitution />
      <CardList title="Terbaru" />
      <CardList title="Bisnis" />
      <CardList title="Pengembangan Karir" />
      <ListTestimony />
    </>
  );
}
