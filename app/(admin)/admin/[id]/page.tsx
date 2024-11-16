"use client";
import { getSingleUser, updateUserAmount } from "@/actions/user";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserRole } from "@prisma/client"; // Use the enum from Prisma

interface UserProps {
  id: string;
  fullname: string | null;
  email: string | null;
  phone: string | null;
  amount: number | null;
  role: UserRole; // Use Prisma's UserRole type
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

function GetSingleUserPage() {
  const params = useParams();
  const { id } = params;

  const [user, setUser] = useState<UserProps | null>(null);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getSingleUser(id as string);
      setUser(userData as UserProps); // Ensure userData matches UserProps
    };
    fetchUser();
  }, [id]);

  // Handle updating user amount
  const handleUpdateAmount = async () => {
    setLoading(true);
    const response = await updateUserAmount(id as string, amount);

    if (response.success) {
      setMessage("User amount updated successfully!");
      // Fetch updated user data
      const updatedUserData = await getSingleUser(id as string);
      setUser(updatedUserData as UserProps);
    } else {
      setMessage(response.error || "An error occurred.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">User Details</h1>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      {user ? (
        <div className="w-full max-w-md bg-gray-100 p-6 rounded-md shadow-md">
          <p>
            <strong>Full Name:</strong> {user.fullname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Current Amount:</strong> {user.amount}
          </p>

          <div className="my-4">
            <label className="block text-sm font-medium mb-1">
              Update Amount:
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border rounded p-2 w-full"
            />
          </div>

          <Button
            onClick={handleUpdateAmount}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Updating..." : "Update Amount"}
          </Button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default GetSingleUserPage;
