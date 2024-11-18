interface DashBoardCardsProps {
  icon?: React.ElementType;
  title: string;
  amount: number;
}

export const DashBoardCards = ({
  title,
  amount,
  icon: Icon,
}: DashBoardCardsProps) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col gap-y-1.5">
        <div className="flex items-center gap-x-3">
          <div className="p-3 rounded-full bg-blue-600 flex items-center justify-center w-12 h-12">
            {Icon && <Icon color="white" size={28} />}
          </div>
          <h2 className="font-semibold text-blue-600 text-lg">{title}</h2>
        </div>

        <div className="bg-gray-100 rounded-md p-2 mt-3">
          <h1 className="text-gray-500 text-sm">Total Balance:</h1>
          <span className="text-xl font-semibold text-blue-600">
            ${amount + amount * 0.1}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <h1 className="text-gray-500 text-sm">Deposit:</h1>
            <span className="text-md font-medium text-blue-600">${amount}</span>
          </div>
          <div>
            <h1 className="text-gray-500 text-sm">Profit:</h1>
            <span className="text-md font-medium text-blue-600">
              ${amount * 0.1}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
