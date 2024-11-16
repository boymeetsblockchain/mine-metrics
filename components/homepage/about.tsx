export const AboutComponent = () => {
  return (
    <section
      id="about"
      className="px-6 py-10 md:py-16 bg-gray-50 flex flex-col items-center gap-y-8"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
        About Us
      </h3>
      <p className="text-lg text-center text-gray-700 max-w-3xl leading-relaxed">
        Your Trusted Partner in Flexible Cryptocurrency Investments
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
        We are MineMetrics
      </h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        MineMetrics offers high-growth investment opportunities in Bitcoin and
        other financial markets. With an emphasis on flexibility, our company
        combines proven strategies in trading and mining to deliver optimal
        returns for our global clientele.
      </p>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        As an established trading platform, we provide access to Tesla stocks
        and other investments across diverse industries, including technology,
        healthcare, and finance—enabling portfolio diversification for our
        clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl w-full">
        {/* Mission */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center gap-4 text-center transition-transform transform hover:scale-105">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800">
            Our Mission
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We leverage our expertise to benefit clients and provide resources
            to navigate the cryptocurrency world with ease and confidence.
          </p>
        </div>

        {/* Advantages */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center gap-4 text-center transition-transform transform hover:scale-105">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800">
            Our Advantages
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With a commitment to transparency and accessible markets, we drive
            adoption and offer diverse investment opportunities across multiple
            industries.
          </p>
        </div>

        {/* Guarantees */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center gap-4 text-center transition-transform transform hover:scale-105">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800">
            Our Guarantees
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We prioritize transparency, security, and reliable returns, striving
            to be a trusted leader in cryptocurrency investments.
          </p>
        </div>
      </div>
    </section>
  );
};
