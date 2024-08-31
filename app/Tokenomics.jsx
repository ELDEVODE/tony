export default function Tokenomics() {
  return (
    <div className="flex flex-col items-center justify-center h-scren CFont p-8">
      <div className="p-4 bg-[#d71214] rounded-2xl">
        <h1 className="text-5xl md:text-[120px] CFont text-[#fff] font-bold text-center">
          Tokenomics
        </h1>
      </div>
      <div>
        <div className="bg-[#d71214] rounded-[100px] flex flex-row justify-between p-4 mt-4  shadow-inner shadow-[#fc9191] drop-shadow-xl">
          <p className="p-3 text-xs md:text-2xl font-bold text-white">
            0x8b6fE6bA4b2F2BDFE1d1f9D5C2E5F2C3D6F1a0A7
          </p>
          <button className="bg-[#ffffff] p-3 px-4 text-xs md:text-2xl rounded-[100px] text-[#d71214] font-bold shadow-lg shadow-[#ff9697]">
            Copy
          </button>
        </div>
      </div>
      {/* Create 4 cards with a css grid, each card has an image and then the tokenomics information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          {
            src: "/images/c1.jpg",
            text: "Total Supply: 1,000,000,000,000,000",
          },
          { src: "/images/c2.jpg", text: "Burned: 50%" },
          { src: "/images/c3.jpg", text: "Liquidity: 50%" },
          { src: "/images/c4.jpg", text: "Marketing: 50%" },
        ].map((item, index) => (
          <div
            key={index}
            className="card rounded-[50px] flex flex-col items-center justify-center p-4 shadow-inner shadow-[#fff] drop-shadow-xl border-[10px] border-[#d71214]"
          >
            <img
              src={item.src}
              className="w-[50] h-[50] border-[10px] border-[#d71214] rounded-3xl"
            />
            <p className="p-3 text-xs md:text-2xl font-bold text-[#d71214]">
              {item.text}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
