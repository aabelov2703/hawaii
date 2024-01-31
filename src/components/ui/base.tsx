"use client";
import { useEffect, useState } from "react";
import Container from "../global/container";
import Filters from "./filters";
import Data from "./data";
import { points } from "@/context/points";
import Map from "./map";

const Base = () => {
  const [selected, setSeleted] = useState<string[]>([]);
  const [filtered, setFiltered] = useState(points);

  useEffect(() => {
    const filteredPts = points.filter(
      (pts) =>
        selected.length === 0 ||
        pts.tag
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => selected.includes(tag)).length > 0
    );
    setFiltered(filteredPts);
  }, [selected]);

  return (
    <Container>
      <Map />
      <Filters
        options={points
          .map((point) => point.tag)
          .flatMap((tags) => tags.split(",").map((tag) => tag.trim()))
          .filter((tags, index, self) => self.indexOf(tags) === index)}
        setValues={setSeleted}
        values={selected}
        info={`Items shown: ${filtered.length}`}
      />
      <Data data={filtered} />
    </Container>
  );
};

export default Base;
