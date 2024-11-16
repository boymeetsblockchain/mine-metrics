"use client";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react"; // Adjust imports for your auth provider
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SettingsPage() {
  const { data: session } = useSession(); // Fetch session data (e.g., user details)

  // Handle logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
      <Header text="Settings Page" />
      <div className="flex flex-col items-center space-y-6 mt-8">
        <div className="shadow-md rounded-lg p-6 space-y-4 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-lg font-semibold">Client Details</h2>
          <div className="space-y-3">
            <div>
              <Label>Username</Label>
              <Input
                type="text"
                value={session?.user?.name || "N/A"}
                disabled
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={session?.user?.email || "N/A"}
                disabled
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
          <Button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
