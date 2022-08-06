import Box from "../Box/Box";

const img = [
  "/CardBox/CardBox1.jpg",
  "/CardBox/CardBox2.jpg",
  "/CardBox/CardBox3.jpg",
  "/CardBox/CardBox4.jpg",
];

export default function CardBox(props) {
  return (
    <div className="min-w-[330px]   max-w-[29%] overflow-hidden   p-7 rounded-2xl border border-[#e2e2ed]">
      <h2 className="text-3xl font-medium pb-10">
        Check out the hottest Sale offer
      </h2>
      <div className="-mr-20 space-y-3  w-full ">
        {img.map((item, i) => (
          <Box key={i} img={item} />
        ))}
      </div>
      <button className="w-full border rounded-xl text-[#7780a1] text-sm border-[#7780a1] py-2 mt-6">
        Show me more
      </button>
    </div>
  );
}
