import Image from "next/image";
import DropDownMenu from "./../utils/DropDownMenu";
import { HiOutlineSearch } from "react-icons/hi";
import ProductBar from "../productBar/ProductBar";
export default function Heading(props) {
  return (
    <div className="mt-5 relative h-[700px] bg-white bg-opacity-90  mx-auto">
      <div className="relative -z-20">
        <Image
          className="mt-6 opacity-30 absolute -z-20"
          src="/HeaderIcon/circle.svg"
          width={1920}
          height={1080}
          alt="circle"
        />
      </div>

      <div className="absolute text-center z-30 bg-inherit    top-24 left-[50%] -translate-x-[50%] ml-auto">
        <p className="uppercase tracking-[.2em] text-gray-500 text-xs">
          non fungible tokens
        </p>
        <div className="heading font-headers text-gray-800  font-semibold text-8xl mt-4">
          <h1 className="mr-10  ">A new NFT</h1>
          <h1 className="ml-10">Experience</h1>
        </div>
        <p className="uppercase  pt-8 tracking-[.2em] text-gray-500 ">
          Discover, collect and Sell
        </p>
        <div className="shadow-lg bg-white mt-20 py-5 items-center flex rounded-md">
          <input
            type="text"
            placeholder="Items, Collections and Creators"
            className=" mx-4  border-r pr-20 border-gray-400  focus:outline-none "
          />
          <DropDownMenu />
          <HiOutlineSearch
            size={20}
            color={"#2a27c9"}
            className="rotate-90 m-auto"
          />
        </div>
      </div>
    </div>
  );
}
