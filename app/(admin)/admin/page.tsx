"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/actions/user";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
function AdminPage() {
  const [users, setUsers] = useState<User[] | []>([]);
  const router = useRouter();
  useEffect(() => {
    // Fetch all users from the database
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers as User[]);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Admin Dashboard
      </h1>

      <Table className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        <TableCaption>List of all registered users</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="p-4 text-left">Full Name</TableHead>
            <TableHead className="p-4 text-left">Email</TableHead>
            <TableHead className="p-4 text-left">Phone</TableHead>
            <TableHead className="p-4 text-left">Amount</TableHead>
            <TableHead className="p-4 text-left">Role</TableHead>
            <TableHead className="p-4 text-left">Joined Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.length > 0 ? (
            users.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => router.push(`/admin/${user.id}`)}
                className="cursor-pointer"
              >
                <TableCell className="p-4">{user.fullname || "N/A"}</TableCell>
                <TableCell className="p-4">{user.email || "N/A"}</TableCell>
                <TableCell className="p-4">{user.phone || "N/A"}</TableCell>
                <TableCell className="p-4">${user.amount || 0}</TableCell>
                <TableCell className="p-4 capitalize">{user.role}</TableCell>
                <TableCell className="p-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="p-4 text-center text-gray-500">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminPage;
