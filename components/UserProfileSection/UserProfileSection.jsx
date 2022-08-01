import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";

export default function UserProfileSection(props) {
  return (
    <ContentLayout>
      <div className="py-28 flex justify-around px-16 text-4xl font-headers font-semibold">
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

      <div className="clip-path-fancyCard relative flex rounded-xl bg-[#f2f1f6]">
        <img className="w-8 absolute top-4 left-5 " src="/ClipCard/Three.png" />
        <div className="py-16 pt-32 space-y-5 px-24">
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
        <div className="py-16 px-28">
          <p className="uppercase">Overline</p>
          <h2 className="text-3xl">
            Cursus vitae sollicitudin donec nascetur. Join now
          </h2>
          <p>
            Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
            Mauris vestibulum eros libero amet tincidunt.
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}
