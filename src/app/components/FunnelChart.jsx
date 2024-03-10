"use client";
import React, { useContext } from "react";
import { AppContext } from "../../context";

import { Loading } from "./Loading";

import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const FunnelChartComponent = () => {
  const { dataFunnel, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={dataFunnel} isAnimationActive>
          <LabelList
            position="right"
            // fill="#000" // color of the text
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};

export default FunnelChartComponent;
