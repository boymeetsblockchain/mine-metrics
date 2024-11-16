import { Wallet, Rocket, Bitcoin } from "lucide-react";

export const InvestComponent = () => {
  return (
    <div
      id="services"
      className="p-6 md:p-10 flex flex-col items-center gap-y-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        Start Your Bitcoin Investment Journey
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Step 1 */}
        <div className="flex gap-x-4 items-center bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-all duration-300">
          <Wallet className="min-h-8 min-w-8 text-blue-500 " />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
              Download Bitcoin Wallet
            </h3>
            <p className="text-left text-gray-600 text-sm">
              Set up your Bitcoin wallet on PC or mobile to securely store,
              send, and receive Bitcoin. With your wallet, you'll have full
              control over your digital assets, complete with secure encryption
              and access to your private keys.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-x-4 items-center bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-all duration-300">
          <Bitcoin className="min-h-8 min-w-8 text-blue-500 " />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
              Add Funds & Start Investment
            </h3>
            <p className="text-left text-gray-600 text-sm">
              Deposit Bitcoin into your wallet or purchase Bitcoin using a
              credit card or bank transfer. Once funded, you’re ready to start
              investing, taking advantage of real-time market analysis tools and
              professional guidance for maximizing your returns.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-x-4 items-center bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-all duration-300">
          <Rocket className="min-h-8 min-w-8 text-blue-500 " />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
              Withdraw Your Profit
            </h3>
            <p className="text-left text-gray-600 text-sm">
              Easily request a withdrawal of your profits through our secure
              platform. Once approved, funds are transferred to your bank
              account or wallet within one business day. Enjoy hassle-free and
              timely payouts with complete transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
