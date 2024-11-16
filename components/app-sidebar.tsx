"use client";
import {
  Calendar,
  Home,
  DollarSign,
  TrendingUp,
  FileText,
  CreditCard,
  Settings,
  ChevronRight,
  ChevronLeft,
  Wallet,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  useSidebar,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Updated menu items with appropriate icons.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Crypto",
    url: "/dashboard/crypto",
    icon: TrendingUp,
  },
  {
    title: "Forex",
    url: "/dashboard/forex",
    icon: DollarSign,
  },
  {
    title: "Transaction",
    url: "/dashboard/transaction",
    icon: FileText,
  },

  {
    title: "Deposit",
    url: "/dashboard/deposit",
    icon: Wallet,
  },
  {
    title: "Withdraw",
    url: "/dashboard/withdraw",
    icon: CreditCard,
  },

  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      {/* {state == "expanded" && (
        <SidebarHeader className="flex items-center justify-center py-6">
          <h2 className="text-2xl font-bold text-blue-600">Mining Expert</h2>
        </SidebarHeader>
      )} */}
      <SidebarContent className="bg-white shadow-md">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={cn(
                      "rounded-md",
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-blue-50 text-gray-700"
                    )}
                  >
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-2 transition-all",
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        )}
                      >
                        <item.icon
                          className="w-5 h-5"
                          color={isActive ? "#2563eb" : "#3b82f6"}
                        />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter onClick={() => toggleSidebar()} className="bg-white">
        {state == "collapsed" ? (
          <ChevronRight color="#2563eb" />
        ) : (
          <ChevronLeft color="#2563eb" />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
