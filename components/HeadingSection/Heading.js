import Image from "next/image";
import DropDownMenu from "./../utils/DropDownMenu";
import { HiOutlineSearch } from "react-icons/hi";
import ImageLayOut from "../layout/ImageLayOut";
export default function Heading(props) {
  return (
    <div className="mt-5 relative  bg-white bg-opacity-90  mx-auto">
      <ImageLayOut />
      <div className="relative w-full h-[550px] md:h-[700px]  -z-20">
        <img
          className="mt-6 w-full opacity-60 absolute -z-20"
          src="/HeaderIcon/circle.svg"
          alt="circle"
        />
      </div>

      <div className="absolute text-center z-30 bg-transparent drop-shadow-2xl    top-24 left-[50%] -translate-x-[50%] ml-auto">
        <p className="uppercase tracking-[.2em] text-gray-500 text-xs">
          non fungible tokens
        </p>
        <div className="heading font-headers  text-gray-800 w-full  font-semibold  lg:text-8xl text-4xl md:text-5xl mt-4">
          <div className="flex justify-center">
            <h1 className="md:mr-3">A new NFT</h1>
            <Image
              src="/HeaderIcon/Vector.svg"
              width={30}
              height={40}
              alt="tag"
            />
          </div>
          <div className="flex justify-center shrink-0 ml-10">
            <img
              className="shrink-0 w-7  md:w-11"
              src="/HeaderIcon/Frame.svg"
              alt="tag"
            />
            <h1 className="ml-3">Experience</h1>
          </div>
        </div>
        <p className="uppercase text-xs  md:text-base pt-8 md:tracking-[.2em] text-gray-500 ">
          Discover, collect and Sell
        </p>
        <div className="shadow-lg bg-white mt-20 py-3 md:py-5 w-96  md:w-[576px] items-center flex rounded-md">
          <input
            type="text"
            placeholder="Items, Collections and Creators"
            className=" mx-4 w-[55%]  border-r pr-10 md:text-base text-xs md:pr-20 border-gray-400  focus:outline-none "
          />
          <DropDownMenu />
          <HiOutlineSearch
            size={20}
            color={"#2a27c9"}
            className="rotate-90 m-auto mr-3 md:mr-10"
          />
        </div>
      </div>
    </div>
  );
}
