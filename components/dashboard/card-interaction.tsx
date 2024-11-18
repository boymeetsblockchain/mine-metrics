import { ArrowDown, ArrowUp, CreditCard, Wallet2 } from "lucide-react";
import { useRouter } from "next/navigation";
interface CardsProps {
  icon?: React.ElementType;
  title: string;
  amount: number;
  profit: number;
}

export const Card = ({ icon: Icon, title, amount, profit }: CardsProps) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full h-[250px] hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col gap-y-1.5">
        <div className="flex items-center gap-x-4">
          <div className="p-3 rounded-full bg-blue-600 flex items-center justify-center w-12 h-12">
            {Icon && <Icon color="white" size={28} />}
          </div>
          <h2 className="font-semibold text-blue-600 text-lg">{title}</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className=" rounded-md p-2 mt-3">
            <h1 className="text-gray-500 text-sm">Total Balance:</h1>
            <span className="text-xl font-semibold text-blue-600">
              ${amount + profit}
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex  flex-col items-center gap-1 text-gray-500 hover:text-blue-600 cursor-pointer">
              <div className="p-3 rounded-full bg-blue-600 flex items-center justify-center w-10 h-10">
                <Wallet2
                  size={24}
                  color="white"
                  onClick={() => router.push("/dashboard/withdraw")}
                />
              </div>
              <span className="text-sm font-medium text-blue-600">
                Withdraw
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 cursor-pointer">
              <div className="p-3 rounded-full bg-blue-600 flex items-center justify-center w-10 h-10">
                <CreditCard
                  size={24}
                  color="white"
                  onClick={() => router.push("/dashboard/deposit")}
                />
              </div>
              <span className="text-sm font-medium text-blue-600">Deposit</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h1 className="text-gray-500 text-sm">Deposit:</h1>
            <span className="text-md font-medium text-blue-600">${amount}</span>
          </div>
          <div>
            <h1 className="text-gray-500 text-sm">Profit:</h1>
            <span className="text-md font-medium text-blue-600">${profit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
