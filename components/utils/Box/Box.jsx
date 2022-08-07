import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import cl from "classnames";
import Link from "next/link";

export default function Box(props) {
  return (
    <Link href={"/detailsNft/" + props.img.replaceAll("/", "-")}>
      <div className="flex cursor-pointer drop-shadow-xl space-x-5">
        <div>
          <Image
            className="rounded-xl shadow-md"
            objectFit="cover"
            src={props.img}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          <div className="flex justify-between">
            <div className="text-xs flex space-x-2">
              <FaRegClock size={15} />
              <p>22:19</p>
            </div>
            <div className="py-1 px-1 bg-[#514cff] text-[8px] text-white">
              1.25 ETH
            </div>
          </div>
          <div className="flex text-xs justify-between">
            <p>101 people are biding</p>
            <AiOutlineHeart size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
}
