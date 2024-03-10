"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

import { Loading } from "./Loading";

import { ResponsiveContainer, Treemap } from "recharts";

const TreemapComponent = () => {
  const { dataTreemap, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        width={730}
        height={250}
        data={dataTreemap.data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      />
    </ResponsiveContainer>
  );
};

export default TreemapComponent;
