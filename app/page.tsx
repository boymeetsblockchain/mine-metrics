"use client";
import { HeroComponent } from "@/components/homepage/hero";
import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";
import { InvestComponent } from "@/components/homepage/invest";
import { AboutComponent } from "@/components/homepage/about";
import { Partners } from "@/components/homepage/partners";
import Footer from "@/components/footer";

// Dynamically load TradingView widgets to prevent SSR issues
const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  { ssr: false }
);
const FundamentalData = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.FundamentalData),
  { ssr: false }
);
const Timeline = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.Timeline),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Ticker Tape */}
      <div className="mt-6 mb-8">
        <TickerTape colorTheme="light" />
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        <HeroComponent />
      </div>

      {/* Invest Section */}
      <div className="my-16 px-4 md:px-8 lg:px-16">
        <InvestComponent />
      </div>

      {/* Fundamental Data Widget */}
      <div className="my-16 px-4 md:px-8 lg:px-16">
        <FundamentalData
          colorTheme="light"
          symbol="BTCUSDT"
          height={400}
          width="100%"
        />
      </div>

      {/* About Section */}
      <div className="my-16 px-4 md:px-8 lg:px-16">
        <AboutComponent />
      </div>

      {/* Timeline Widget */}
      <div className="my-16 px-4 md:px-8 lg:px-16">
        <Timeline
          colorTheme="light"
          feedMode="market"
          market="crypto"
          height={400}
          width="100%"
        />
      </div>

      {/* Partners Section */}
      <div className="my-16 px-4 md:px-8 lg:px-16">
        <Partners />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
