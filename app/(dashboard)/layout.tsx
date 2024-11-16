import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import { AppSidebar } from "@/components/app-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <SessionProvider>
      <SidebarProvider>
        <SidebarTrigger />
        <AppSidebar />
        <main className="flex-1">{children}</main>
      </SidebarProvider>
    </SessionProvider>
  );
}
