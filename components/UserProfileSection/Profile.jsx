import { RiGalleryLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
export default function Profile(params) {
  return (
    <div className="flex border border-[#e2e2ed] shadow-sm rounded-3xl py-3 px-5 space-x-1 w-full">
      <div className="w-14 rounded-full drop-shadow-lg">
        <img
          className="w-9 h-9  rounded-full object-cover"
          src="/UserIcons/user1.jpg"
        />
      </div>
      <div className="space-y-1 w-full">
        <div className="flex  justify-between">
          <h2 className="text-sm">@brook_sim</h2>
          <div className="p-1 text-[10px] tracking-wider rounded-sm bg-blue-600 text-white">
            3.8ETH
          </div>
        </div>
        <div className="flex text-xs text-[#7780a1] space-x-8 ">
          <div className="flex space-x-1 items-center">
            <RiGalleryLine />
            <p>Item 208</p>
          </div>
          <div className="flex space-x-1 items-center">
            <BsGrid />
            <p>Collection 12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
