"use client";
import { DashBoardCards } from "@/components/dashboard/card";
import { Header } from "@/components/dashboard/header";
import { getUserById } from "@/actions/user";
import { Bitcoin, TrendingUp, BarChart2 } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";

const MarketOverview = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MarketOverview),
  {
    ssr: false,
  }
);

function DashBoardPage() {
  const { data: sessionData } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (sessionData?.user?.id) {
        try {
          const fetchedUser = await getUserById(sessionData.user.id);
          setUser(fetchedUser as User);
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUser();
  }, [sessionData?.user?.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User data could not be loaded.</p>;
  }

  return (
    <div className="p-5 md:p-8 flex flex-col gap-y-4 min-h-screen">
      <Header text="Overview" />
      <p>{sessionData?.user.role}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <DashBoardCards
          title="Cryptocurrency"
          icon={Bitcoin}
          amount={user?.amount}
        />
        <DashBoardCards title="Forex" icon={TrendingUp} amount={user?.amount} />
        <DashBoardCards title="Stocks" icon={BarChart2} amount={user?.amount} />
      </div>
      <div>
        <MarketOverview
          colorTheme="light"
          height={400}
          width="100%"
          showFloatingTooltip
        />
      </div>
    </div>
  );
}

export default DashBoardPage;
