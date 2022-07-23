import Carosel from "../../Curoasle/Carosel";

export default function CaroselCard(props) {
  return (
    <div className="min-w-[330px]  max-w-[29%] overflow-hidden   p-7 rounded-2xl border border-[#e2e2ed]">
      <h2 className="text-3xl font-medium pb-10">
        Check out the hottest Sale offer
      </h2>
      <div className="-mr-20 relative w-[120%] ">
        <div className=" absolute min-w-[165px] h-[102%] right-0 z-50 bg-white opacity-50"></div>
        <Carosel />
      </div>
      <button className="w-full border rounded-xl text-[#7780a1] text-sm border-[#7780a1] py-2 mt-6">
        Show me more
      </button>
    </div>
  );
}
