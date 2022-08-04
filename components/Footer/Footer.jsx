import Image from "next/image";
import ButtonFill from "../Buttons/ButtonFill";
import ContentLayout from "../layout/ContentLayout";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer(props) {
  return (
    <ContentLayout>
      <div className="mt-28 mb-16 border gap-x-4 py-7 px-5 rounded-3xl gap-y-10 grid -adgrid-rows-3 md:gird-cols-2 md-grid-rows-2 lg:grid-cols-3 lg-grid-rows-1">
        {/* part 1 */}
        <div className="flex col-start-1   row-start-1 row-end-1 col-end-1 flex-col justify-between">
          <div className="space-x-2 flex items-center">
            <Image src="/HeaderIcon/Sygnet.svg" alt="" width={22} height={22} />
            <strong className="font-headers text-xl tracking-wide">
              NFT Market
            </strong>
          </div>
          <div className="flex space-x-4 text-[10px] text-[#7780a1]">
            <p>Support</p>
            <p>Term of service</p>
            <p>License</p>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex flex-col border-l px-2 md:px-8 col-start-2 col-end-2 justify-between">
          <div className=" mb-6 text-sm font-semibold space-y-2">
            <p>Auctions</p>
            <p>Roadmap</p>
            <p>Discover</p>
            <p>Community</p>
          </div>
          <div className="mb-9">
            <ButtonFill name="my account" />
          </div>
          <div className="flex space-x-4">
            <AiFillFacebook size={20} color="#7780a1" />
            <AiFillLinkedin size={20} color="#7780a1" />
            <AiFillTwitterSquare size={20} color="#7780a1" />
            <AiFillGithub size={20} color="#7780a1" />
            <AiFillInstagram size={20} color="#7780a1" />
          </div>
        </div>
        {/* part 3 */}
        <div className="flex lg:px-8 lg:flex-col flex-col space-y-4 md:space-y-0 md:flex-row justify-between lg:border-l lg:row-start-1  md:row-start-2 md:row-end-2 col-start-1 col-end-3 lg:col-start-3 lg:col-end-3 ">
          <div className="">
            <p className="text-[12px] text-[#7780a1]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              molestiae, libero qui ipsam id esse repellendus exercitationem
              laboriosam cumque provident porro
            </p>
          </div>
          <div className="flex w-full  justify-between">
            <div className="rounded-3xl py-2 bg-white items-center drop-shadow-md flex">
              <input
                className="py-[6px] w-[80%] text-sm rounded-3xl px-6 focus:outline-none"
                placeholder="newsletter"
                type="text"
              />
              <p className="text-xs mr-2">Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
