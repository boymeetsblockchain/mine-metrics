import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export const HeroComponent = () => {
  return (
    <div
      className={cn(
        "relative h-[600px] bg-center bg-cover flex items-center flex-col gap-y-6 justify-center"
      )}
      style={{ backgroundImage: 'url("/hero.jpeg")' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 text-center flex items-center flex-col gap-y-5 text-white p-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Unlock the Future of Mining
        </h1>

        {/* Subheading */}
        <h2 className="text-lg md:text-2xl font-light max-w-xl">
          Providing you with cutting-edge tools to maximize productivity and
          precision in mining operations.
        </h2>

        {/* Call to Action Button */}
        <Button className="bg-blue-400 text-white w-48 py-3 rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:bg-white hover:text-blue-400 hover:border-blue-400 shadow-lg">
          <Link href={"/register"}>Join Us </Link>
        </Button>
      </div>
    </div>
  );
};
