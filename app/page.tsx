"use client";
import { HeroComponent } from "@/components/homepage/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import dynamic from "next/dynamic";
import { InvestComponent } from "@/components/homepage/invest";
import { AboutComponent } from "@/components/homepage/about";
import { AdvancedRealTimeChart, Timeline } from "react-ts-tradingview-widgets";
import { Partners } from "@/components/homepage/partners";
import Footer from "@/components/footer";

const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const FundamentalData = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.FundamentalData),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <Navbar />
      <TickerTape colorTheme="light"></TickerTape>

      <HeroComponent />
      <InvestComponent />
      <div className="my-6">
        <FundamentalData
          colorTheme="light"
          symbol="BTCUSDT"
          height={400}
          width="100%"
        ></FundamentalData>
      </div>
      <AboutComponent />

      {/* <div className="my-6">
        <AdvancedRealTimeChart
          theme="light"
          symbol="BTCUSDT"
          width={"full"}
        ></AdvancedRealTimeChart>
      </div> */}
      <div className="my-6">
        <Timeline
          colorTheme="light"
          feedMode="market"
          market="crypto"
          height={400}
          width="100%"
        ></Timeline>
      </div>
      <div>
        <Partners />
      </div>
      <Footer />
    </div>
  );
}
