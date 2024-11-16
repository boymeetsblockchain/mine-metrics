"use client";

import { useEffect, useState } from "react";

import { TriangleAlert, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/dashboard/header";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { toast } from "react-hot-toast";

const coinOptions = ["Bitcoin", "Ethereum", "Litecoin"];

function WithdrawPage() {
  const [formData, setFormData] = useState({
    payment: "",
    coin: "",
    add: "",
    amount: "",
    percent: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const amountValue = parseFloat(value);
      const percentValue = amountValue * 0.965; // Calculate 96.5% after fees
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        percent: percentValue.toFixed(2),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handlePasteAddress = () => {
    navigator.clipboard.readText().then((pastedText) => {
      setFormData((prevData) => ({ ...prevData, add: pastedText }));
    });
  };

  const handleSubmit = () => {
    if (!formData.coin || !formData.amount || !formData.add) {
      // toast.error("Please fill in all details");
    } else {
      // toast.success("Your withdrawal is on the way!");
      setFormData({ payment: "", coin: "", add: "", amount: "", percent: "" });
      router.refresh;
    }
  };

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen w-full">
      <Header text="Withdrawal Page" />
      <div className="flex flex-col items-center space-y-6 my-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TriangleAlert color="red" />
          <p>
            Funds will be sent at the current USD market rate, with a 3.5%
            exchange commission.
          </p>
        </div>

        <h1 className="text-lg font-bold text-blue-600">
          Withdraw Crypto Directly to Your Wallet
        </h1>

        <div className="shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 bg-gray-50">
          <div className="flex flex-col gap-4">
            <div>
              <Label>Amount to Withdraw</Label>
              <Input
                type="number"
                name="amount"
                defaultValue={0}
                value={formData.amount}
                className=" border border-gray-300 focus:ring-0  px-2 py-1.5 focus:outline-none w-full"
                onChange={handleChange}
                placeholder="Enter withdrawal amount"
              />
            </div>

            <div>
              <Label>Amount Left After Commission</Label>
              <Input
                type="text"
                name="percent"
                className=" border border-gray-300 focus:ring-0  px-2 py-1.5 focus:outline-none w-full"
                value={formData.percent}
                readOnly
                placeholder="96.5% of withdrawal amount"
              />
            </div>

            <div className="flex items-center">
              <Label>Wallet Address</Label>
              <Input
                type="text"
                className=" border border-gray-300 focus:ring-0  px-2 py-1.5 focus:outline-none w-full"
                name="add"
                value={formData.add}
                onChange={(e) => handleChange(e)}
                placeholder="Paste wallet address here"
              />
              <CreditCard
                className="h-5 w-5 text-blue-600 cursor-pointer ml-2"
                onClick={handlePasteAddress}
              />
            </div>
          </div>

          <button
            className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            onClick={handleSubmit}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawPage;
