const img = [
  "/Carosel/Caros-1.jpeg",
  "/Carosel/Caros-2.jpeg",
  "/Carosel/Caros-3.jpeg",
  "/Carosel/Caros-4.jpeg",
  "/Carosel/Caros-5.jpeg",
  "/Carosel/Caros-6.jpeg",
  "/Carosel/Caros-7.jpeg",
  "/Carosel/Caros-8.jpeg",
  "/Carosel/Caros-9.jpeg",
];

export default function CardBox(props) {
  return (
    <div className="min-w-[330px]  max-w-[29%] overflow-hidden   p-7 rounded-2xl border border-[#e2e2ed]">
      <h2 className="text-3xl font-medium pb-10">
        Check out the hottest Sale offer
      </h2>
      <div className="-mr-20  w-full ">
        
      </div>
      <button className="w-full border rounded-xl text-[#7780a1] text-sm border-[#7780a1] py-2 mt-6">
        Show me more
      </button>
    </div>
  );
}
