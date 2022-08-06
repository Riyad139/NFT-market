import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";

import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";

export default function NftContent(params) {
  return (
    <ContentLayout>
      <div className="flex smx:flex-row flex-col border rounded-2xl my-16">
        {/* Image start here */}
        <div className="smx:w-[50%] w-full h-[400px]  smx:h-auto flex justify-center flex-shrink-0  p-8 ">
          <img
            className="object-cover rounded-2xl flex flex-shrink-0"
            src="/FloatingImage/img1.jpg"
            alt=""
          />
        </div>
        {/* image end here */}
        {/* content start here */}
        <div className=" relative w-full pt-16 pb-3 smx:py-16 flex flex-col px-3 md:px-4 lg:px-10 smx:pr-36">
          <div className="absolute border p-4 rounded-full -right-[26px]">
            <AiFillHeart color="red" size={18} />
          </div>
          <div className="absolute border p-4 rounded-full top-32 -right-[26px]">
            <VscFiles size={18} />
          </div>
          <div className="absolute border p-4 rounded-full top-48 -right-[26px]">
            <AiOutlineShareAlt size={18} />
          </div>

          <h2 className="text-4xl font-headers font-semibold">
            Dui accumsan leo vestibulum ornare
          </h2>
          <p className="py-5 text-sm text-[#7780a1] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo id
            modi exercitationem assumenda optio.
          </p>
          {/* profile start here */}
          <div className="profile ">
            <div className="flex space-x-10">
              <div className="flex space-x-5">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src="/UserIcons/user1.jpg"
                />
                <div className="text-xs font-medium">
                  <h4 className="text-[#7780a1]">Creator</h4>
                  <p className="">@brook_slim</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src="/ArtCollection/artCollect.jpg"
                />
                <div className="text-xs font-medium">
                  <h4 className=" text-[#7780a1]">Collection</h4>
                  <p>@Afterline</p>
                </div>
              </div>
            </div>
          </div>
          {/* profile start here */}
          {/* card start here */}
          <div className=" my-10 spx:mt-auto mt-10 flex flex-col space-y-7 p-10 rounded-2xl  bg-[#f2f1f6]">
            <div className="flex justify-between ">
              <div className="space-y-2">
                <p className="text-xs text-[#7780a1]">Current price</p>
                <h2 className="text-4xl font-bold">
                  5.25 <span className="text-lg">ETH</span>
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[#7780a1]">Time left</p>
                <h2 className="text-2xl font-semibold">
                  22:59 <span className="text-lg">min</span>
                </h2>
                <p className="text-xs -mt-9 text-[#7780a1]">
                  (01.02.2022-02.03.2022)
                </p>
              </div>
            </div>
            <ButtonFill name="place a bid" />
          </div>
          {/* card end here here */}
        </div>
        {/* content start here */}
      </div>
    </ContentLayout>
  );
}