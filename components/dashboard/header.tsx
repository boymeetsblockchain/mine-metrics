"use client";

import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b  border-gray-200 shadow-sm">
      <h2 className="font-semibold  text-sm md:text-xl text-gray-800">
        {text}
      </h2>
      <div className="flex items-center gap-x-4">
        <p className="bg-blue-600 text-white text-xs hidden md:block   md:text-base font-medium px-4 py-2 rounded-md shadow-md">
          {session?.user?.name || "Guest"}
        </p>
        <Button className="bg-green-500 text-white font-semibold hover:bg-green-600 text-xs md:text-base transition-colors duration-200 px-4 py-2 rounded-md shadow-md">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
