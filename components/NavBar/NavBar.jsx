import Link from "next/link";
import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";
import { useState } from "react";
import classNames from "classnames";
import { Spiral as Hamburger, Spiral } from "hamburger-react";
export default function NavBar(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="w-full py-5 px-9 justify-between items-center flex">
      <Link href="/">
        <div className="space-x-2 cursor-pointer flex items-center">
          <Image src="/HeaderIcon/Sygnet.svg" alt="" width={22} height={22} />
          <strong className="font-headers text-xl tracking-wide">
            NFT Market
          </strong>
        </div>
      </Link>
      <div className=" lg:hidden">
        <div
          className={classNames(
            "flex items-center right-5 fixed z-[100] ",
            isOpen ? "text-[#f2f3f6]" : "text-[#060714]"
          )}
        >
          <Spiral toggled={isOpen} toggle={setOpen} />
          {!isOpen ? <p>open</p> : <p>close</p>}
        </div>

        <div
          className={classNames(
            "w-full h-[100vh] flex top-0 text-[#f2f3f6] duration-300 space-y-10 items-center left-0  flex-col fixed bg-[#2a27c9] z-[60] justify-center",
            isOpen ? "translate-x-0" : "-translate-x-[100%]"
          )}
        >
          <Link href="#">Auctions</Link>
          <Link href="#">Roadmap</Link>
          <Link href="#">Discover</Link>
          <Link href="#">Community</Link>
          <div className="space-x-2 flex space-y-10 flex-col">
            <Button name="Contact" />
            <ButtonFill name="My account" />
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex text-sm font-medium text-gray-500 space-x-10">
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
      </div>
      <div className=" hidden lg:flex space-x-2">
        <Button name="Contact" />
        <ButtonFill name="My account" />
      </div>
    </nav>
  );
}
