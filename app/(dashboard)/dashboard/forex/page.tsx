"use client";
import { Card } from "@/components/dashboard/card-interaction";
import { Header } from "@/components/dashboard/header";
import { ChartAreaIcon } from "lucide-react";

import dynamic from "next/dynamic";

const ForexHeatMap = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.ForexHeatMap),
  {
    ssr: false,
  }
);
const TechnicalAnalysis = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TechnicalAnalysis),
  {
    ssr: false,
  }
);
const MiniChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MiniChart),
  {
    ssr: false,
  }
);

function ForexPage() {
  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
      <Header text="Cryptocurrency" />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-2 gap-y-6 mt-6">
        <div className="">
          <Card
            icon={ChartAreaIcon}
            title="Forex Market"
            amount={0}
            profit={0}
          />
        </div>

        <div className="shadow-lg rounded-lg bg-white p-4 flex flex-col items-center justify-center">
          <ForexHeatMap colorTheme="light" width="100%" height={250} />
        </div>

        <div className="shadow-lg rounded-lg bg-white p-4 flex flex-col items-center justify-center md:col-span-2">
          <TechnicalAnalysis
            colorTheme="light"
            width="100%"
            height={400}
            symbol="JPYEUR"
          />
        </div>

        <div className="shadow-lg rounded-lg bg-white p-4 flex flex-col md:col-span-2 items-center justify-center">
          <MiniChart
            colorTheme="light"
            symbol="EURUSD"
            width="100%"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default ForexPage;
