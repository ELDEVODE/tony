export default function Section1() {
  return (
    <div className="p-8 flex flex-col justify-center items-center CFont">
      <div>
        {/* about tony , a header and a description*/}
        <div
          id="About us"
          className="flex flex-col items-center justify-start h-scren mt-20  p-4 max-w-3xl rounded-2xl border-[10px] border-[#ffbc6b] shadow-2xl rounded-bl-[100px]"
        >
          <h1 className="text-7xl md:text-[100px] CFont text-[#ffb860] font-bold text-center mb-4">
            About Tony
          </h1>
          <p className="text-2xl CFont text-[#ffb963] font-bold text-center max-w-3xl">
            Inspired by the fearless and charismatic persona of Tony, the
            kingpin of casinos and the mastermind behind the boys' club, $TONY
            isn't just a coin—it's a lifestyle.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col items-center justify-start h-scren mt-20 glass p-4 max-w-lg rounded-2xl">
        <img src="/images/cash.jpg" className="w-[50] h-[50] rounded-xl" />

        {/* <p className="text-2xl CFont text-[#E38412] font-bold text-center max-w-3xl">
        Meet $TONY, the ultimate high-roller memecoin that brings a touch of
        danger and a whole lot of swagger to the crypto world.
      </p> */}
        {/* hero image */}
      </div>
    </div>
  );
}
