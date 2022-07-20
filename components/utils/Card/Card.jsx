import Image from "next/image";

export default function Card(params) {
  return (
    <div className="rounded-md w-[28%]">
      <div className="img w-full rounded-md flex  aspect-w-10 aspect-h-13 ">
        <Image
          src="/NftImage/NFTmarket.jpg"
          className=" rounded-md"
          layout="fill"
          objectFit="cover"
          alt="pic"
        />
      </div>
      <div className="des  flex font-medium text-lg  py-5">
        <p>Lorem ipsum dolor sit amet, adipisicing elit.</p>
        <div className="bg-[#e5e4ff]  text-[#2a27c9] flex items-center space-x-1 px-2">
          <p>3.19</p>
          <p>ETH</p>
        </div>
      </div>
      <div></div>
      <div className="ratings"></div>
    </div>
  );
}
