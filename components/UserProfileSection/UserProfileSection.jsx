import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";
import PicSection from "./PicSection";
import Profile from "./Profile";

export default function UserProfileSection(props) {
  return (
    <ContentLayout>
      <div className="py-28 flex justify-around px-4 md:px-16 text-2xl xm:text-3xl md:text-4xl font-headers font-semibold">
        <div className="flex  flex-col items-center">
          <Image src="/UserIcons/Untitled.svg" width={25} height={25} alt="" />
          <h3 className="mt-5 mb-2">300k</h3>
          <p className="text-xs  font-normal text-[#7780a1]">user Active</p>
        </div>
        <div className="flex  flex-col items-center">
          <Image src="/UserIcons/artWork.svg" width={25} height={25} alt="" />
          <h3 className="mt-5 mb-2">52,5k</h3>
          <p className="text-xs  font-normal text-[#7780a1]">Artworks</p>
        </div>
        <div className="flex  flex-col items-center">
          <Image src="/UserIcons/painting.svg" width={25} height={25} alt="" />
          <h3 className="mt-5 mb-2">17,5k</h3>
          <p className="text-xs  font-normal text-[#7780a1]">Artist</p>
        </div>
        <div className="flex  flex-col items-center">
          <Image src="/UserIcons/wallet.svg" width={25} height={25} alt="" />
          <h3 className="mt-5 mb-2">38.58</h3>
          <p className="text-xs  font-normal text-[#7780a1]">ETH spent</p>
        </div>
      </div>

      <div className="lg:clip-path-fancyCard flex-col py-9 lg:flex-row relative flex rounded-xl bg-[#f2f1f6]">
        <img className="w-8 absolute top-4 left-5 " src="/ClipCard/Three.png" />
        <div className="lg:py-16 pt-32 lg:w-[50%] w-full  space-y-5 px-5 lg:px-24">
          <p className="uppercase text-sm text-[#7780a1] ">Overline</p>
          <h2 className="text-4xl font-bold font-headers">
            Cursus vitae sollicitudin donec nascetur. Join now
          </h2>
          <p className="text-xs tracking-wider text-[#7780a1]">
            Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
            Mauris vestibulum eros libero amet tincidunt.
          </p>
          <div className="flex space-x-5 mt-24 mb-5">
            <ButtonFill name="Get started" />
            <Button name="Learb more" />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5 md:mt-0 lg:w-[50%] relative gap-y-4  overflow-hidden lg:overflow-visible grid-rows-4 lg:grid-rows-2 ">
          <div className="h-full w-[60%] hidden lg:table  bg-[#f2f1f6] opacity-40 z-40 absolute right-0  "></div>
          <div className="col-start-1   lg:-mt-24 lg:mr-9 col-end-2 lg:col-end-3 row-start-2 row-end-2">
            <Profile />
          </div>
          <div className="col-start-3 lg:-mr-32 lg:mt-28 col-end-4 row-start-1 row-end-2">
            <Profile />
          </div>
          <div className="col-start-2 lg:mr-9 lg:-ml-9 row-start-3 row-end-4 lg:mt-3 col-end-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
            <Profile />
          </div>
          <div className="lg:col-start-1 col-start-3 col-end-4  lg:mt-28 lg:col-end-3 lg:-ml-14 lg:mr-16 lg:row-start-2 lg:row-end-3 row-start-4 row-end-5">
            <Profile />
          </div>
        </div>
      </div>
      {/* section image */}
      <div className="mt-44 hidden space-x-5 w-[120%] -ml-[10%]  lg:visible lg:flex mb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
          <PicSection key={"Robin-" + item} />
        ))}
      </div>
    </ContentLayout>
  );
}
