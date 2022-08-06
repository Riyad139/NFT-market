import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import cl from "classnames";

const data = [1, 2, 3, 4];

export default function Card(props) {
  return (
    <div
      className={cl(
        "rounded-xl   w-[100%]",
        props.isCardSection ? "" : " p-5 border border-[#e2e2ed]"
      )}
    >
      <div
        className={cl(
          "img w-full shadow-2xl rounded-3xl flex",
          props.isCardSection
            ? "aspect-w-[30] aspect-h-[52]"
            : "aspect-w-10 aspect-h-13 "
        )}
      >
        <Image
          src={props.nft}
          className={cl(props.isCardSection ? "rounded-3xl" : " rounded-md")}
          layout="fill"
          objectFit="cover"
          alt="pic"
        />
      </div>
      <div
        className={cl(
          "des  flex font-medium text-sm  py-3",
          props.isCardSection ? "flex-col text-xs " : ""
        )}
      >
        <p>Lorem ipsum dolor sit amet elit.</p>
        {!props.isCardSection && (
          <div className="bg-[#e5e4ff]     text-[#2a27c9] text-sm flex items-center space-x-1 px-2">
            <p>3.19</p>
            <p>ETH</p>
          </div>
        )}
      </div>
      <div className="flex justify-between text-xs">
        <div className="flex items-center space-x-3">
          <FaRegClock size={16} />
          <p>02:41 min left</p>
        </div>
        {props.isCardSection && (
          <div className="bg-[#e5e4ff]  text-xs   text-[#2a27c9]  flex items-center space-x-1 px-1">
            <p>3.19</p>
            <p>ETH</p>
          </div>
        )}
      </div>
      <div className="ratings text-xs text-[#7780a1] flex justify-between items-center pt-4 border-t border-[] mt-7">
        {!props.isCardSection && (
          <div className="img flex">
            {data.map((i) => (
              <img
                key={i}
                className=" w-[35px] first:-ml-2 h-[35px] object-cover border-[5px] -ml-4 p-[0.5px] border-white rounded-full"
                src={`/user/User${Math.ceil(Math.random() * 9) + 1}.jpg`}
                alt="rat"
              />
            ))}
          </div>
        )}
        <p>35 people are biding</p>
        <div className="flex space-x-1 items-center">
          <AiOutlineHeart size={18} /> <span>120</span>
        </div>
      </div>
    </div>
  );
}
