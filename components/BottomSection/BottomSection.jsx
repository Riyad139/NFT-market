import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";

export default function BottomSection(params) {
  return (
    <ContentLayout>
      <div className="flex md:flex-row flex-col w-full text-[#7780a1] border-b  md:space-x-24 py-40">
        <div className="w-full">
          <img src="/NftImage/left.png" alt="dwda" />
        </div>
        <div>
          <p className="uppercase tracking-widest mb-4 text-[12px]">Overline</p>
          <h4 className="text-5xl text-[#191925] font-bold font-headers">
            Habitant tristique aliquam in vel scelerisque
          </h4>
          <p className="text-sm mt-8 mb-14">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            excepturi dignissimos dolorum,
          </p>
          <div className="flex justify-between">
            <div>
              <Image
                src={"/NftImage/Vector.png"}
                alt="wa"
                width={32}
                height={32}
              />
              <p className="text-[#191925] mt-3 text-lg font-bold">
                Dolores consequuntur
              </p>
              <p className="text-sm ">Dolores consequuntur</p>
            </div>
            <div>
              <Image
                src={"/NftImage/Icon.png"}
                alt="wa"
                width={32}
                height={32}
              />
              <p className="text-[#191925] mt-3 text-lg font-bold">
                Dolores consequuntur
              </p>
              <p className="text-sm ">Dolores consequuntur</p>
            </div>
          </div>
          <div className="mt-10 space-x-4">
            <ButtonFill name="Get started" />
            <Button name="Learn more" />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
