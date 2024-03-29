"use client";
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className=""> 
          <ChartOne />
        </div>
        <div>
          <ChartTwo />
        </div>
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
