"use client";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";
import { useState } from "react";
// import { toast } from "react-hot-toast";

function DepositPage() {
  const [btcAddress] = useState("");

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(btcAddress).then(() => {
      // toast.success("Bitcoin address copied to clipboard!");
    });
  };

  return (
    <div className="p-6 md:p-10  min-h-screen">
      <Header text="Deposit Page" />
      <div className="flex flex-col items-center my-8">
        <div className="shadow-md rounded-lg p-6 space-y-6 bg-white w-full md:w-2/3 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <Label className="font-medium text-gray-600">Bitcoin Address</Label>
            <div className="border border-gray-200 p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Bitcoin address</p>
                <p className="text-sm font-medium text-gray-700">
                  {btcAddress}
                </p>
              </div>
              <Clipboard
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                size={20}
                onClick={handleCopyAddress}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-medium text-gray-600">Amount</Label>
            <Input
              type="number"
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-0   focus:outline-none w-full"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-medium text-gray-600">
              Proof of Payment
            </Label>
            <Input
              type="file"
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-1 focus:ring-blue-500"
              placeholder="Upload Proof of Payment"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DepositPage;
