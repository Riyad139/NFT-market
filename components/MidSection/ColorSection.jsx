import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";

export default function ColorSection(props) {
  return (
    <ContentLayout>
      <div className="flex flex-col items-center md:flex-row my-40 text-sm  md:space-x-48 text-[#bbc0d0]">
        <div className=" space-y-5">
          <p className=" uppercase">Overline</p>
          <h2 className="text-5xl font-headers font-bold text-[#060714]">
            Sapien ipsum scelerisque convallis fusce
          </h2>
          <p>
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="space-x-3">
            <ButtonFill name="Get started" />
            <Button name="Learn more" />
          </div>
        </div>
        <div className=" w-[100%] mt-16 md:mt-0 flex justify-center ">
          <img
            className=" w-[186px] shrink-0 lg:w-[226px] mt-20  -mr-16 inline-block  "
            src="/ColorSection/Image.png"
            alt=""
          />
          <img
            className=" w-[190px] shrink-0 lg:w-[284px] -mt-14 inline-block"
            src="/ColorSection/dice.png"
            alt=""
          />
        </div>
      </div>
    </ContentLayout>
  );
}
