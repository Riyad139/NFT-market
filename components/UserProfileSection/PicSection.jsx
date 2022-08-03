import Image from "next/image";

export default function PicSection(props) {
  return (
    <div className="w-20 h-20 text-center space-y-1 drop-shadow-2xl">
      {/* <img
        className="w-20 rounded-xl h-16 object-cover"
        src="/FloatingImage/img1.jpg"
        alt=""
      /> */}
      <Image
        className="rounded-xl"
        src={"/FloatingImage/img1.jpg"}
        width={80}
        height={80}
        alt=""
      />
      <p className="text-xs text-[#7780a1]">3.78ETH</p>
    </div>
  );
}
