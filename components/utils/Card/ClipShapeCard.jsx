export default function ClipShapeCard(params) {
  return (
    <div className="min-w-[330px]   -top-1  py-12 px-5 clip-path-myCard bg-[#191925] border rounded-2xl  max-w-[29%]">
      <img className="w-8 -mt-8 -ml-2" src="/ClipCard/Three.png" />
      <div className="w-[120%] ">
        <img className="-ml-7 relative -mt-16" src="/ClipCard/Image.png" />
      </div>
      <div className="text-white pr-9 pb-6">
        <h3 className="font-bold text-lg">
          Get started creating & selling your NFTs{" "}
        </h3>
        <p className="text-xs text-[#7780a1] pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit
        </p>
      </div>
      <button className="w-full font-bold rounded-xl  text-xs bg-gradient-to-r from-[#514cff] via-[#2a27c9] to-[#2a27c9] text-white  bg-[#2f2bc8] py-3 mt-6">
        Get started
      </button>
    </div>
  );
}
