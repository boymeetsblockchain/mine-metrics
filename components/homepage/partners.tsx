import Image from "next/image";

export const Partners = () => {
  return (
    <div
      id=""
      className="flex flex-col items-center justify-center py-10 px-6 bg-gray-50"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
        Our Partners and Sponsors
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
        <div className="group flex justify-center">
          <Image
            src="/coinbase.png"
            height={100}
            width={150}
            alt="Coinbase"
            className="transition-transform transform group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <div className="group flex justify-center">
          <Image
            src="/metamask.png"
            height={100}
            width={150}
            alt="Metamask"
            className="transition-transform transform group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <div className="group flex justify-center">
          <Image
            src="/trustwallet.png"
            height={100}
            width={150}
            alt="Trust Wallet"
            className="transition-transform transform group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <div className="group flex justify-center">
          <Image
            src="/phantom.webp"
            height={100}
            width={150}
            alt="Phantom"
            className="transition-transform transform group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
      </div>
    </div>
  );
};
