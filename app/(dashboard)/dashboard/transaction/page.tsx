import { Header } from "@/components/dashboard/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TransactionPage() {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2024-10-04",
      type: "Deposit",
      amount: "$500",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-10-03",
      type: "Withdraw",
      amount: "$200",
      status: "Pending",
    },
    {
      id: 3,
      date: "2024-10-02",
      type: "Deposit",
      amount: "$800",
      status: "Completed",
    },
    {
      id: 4,
      date: "2024-10-01",
      type: "Withdraw",
      amount: "$100",
      status: "Failed",
    },
  ];

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
      <Header text="Recent Transactions" />
      <div className="mt-6 overflow-x-auto bg-gray-50 shadow-lg rounded-lg">
        <Table className="min-w-full">
          <TableCaption>Summary of your latest transactions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-gray-100">
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="font-medium text-blue-600">
                  {transaction.type}
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                      transaction.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionPage;
