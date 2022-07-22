import Image from "next/image";

export default function ImageLayOut() {
  return (
    <div className="w-full hidden  absolute z-10 h-[100vh] lg:grid grid-cols-12 grid-rows-6">
      <div className="col-start-1 drop-shadow-[0_35px_35px_rgba(77,44,16,0.5)] rounded-md col-end-3 row-start-2 row-end-3 ml-10">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src="/FloatingImage/img1.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
      <div className="col-start-11 drop-shadow-[0_35px_35px_rgba(199,96,58,0.2)] -mt-10  rounded-md col-end-11 row-start-2 row-end-2 ml-10">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src="/FloatingImage/img2.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
      <div className="col-start-2 drop-shadow-[0_35px_35px_rgba(244,194,163,0.5)] rounded-md col-end-3 row-start-4 row-end-5 ml-10">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src="/FloatingImage/img3.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
      <div className="col-start-12  drop-shadow-[0_35px_35px_rgba(244,194,163,0.5)] -right-20 relative rounded-md col-end-12 row-start-3 row-end-4 ">
        <Image
          objectFit="cover"
          className="rounded-2xl "
          src="/FloatingImage/img4.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
      <div className="col-start-1  drop-shadow-[0_35px_35px_rgba(244,194,163,0.5)] -mt-10 overflow-hidden -ml-7 rounded-md  col-end-1 row-start-5 row-end-5 ">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src="/FloatingImage/img5.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
      <div className="col-start-10  drop-shadow-[0_35px_35px_rgba(244,194,163,0.5)] ml-10 -mt-10   rounded-md  col-end-11 row-start-5 row-end-5 ">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src="/FloatingImage/img6.jpg"
          width={70}
          height={70}
          alt=""
        />
        <p className="text-xs ml-3 text-[#7780a1]">2.5 ETH</p>
      </div>
    </div>
  );
}
