import Link from "next/link";
import Image from "next/image";
import Button from "../Buttons/Button";
import ButtonFill from "../Buttons/ButtonFill";

export default function NavBar(props) {
  return (
    <nav className="w-full py-5 px-9 justify-between items-center flex">
      <div className="space-x-2 flex items-center">
        <Image src="/HeaderIcon/Sygnet.svg" alt="" width={22} height={22} />
        <strong className="font-headers text-xl tracking-wide">
          NFT Market
        </strong>
      </div>
      <div className="flex text-sm font-medium text-gray-500 space-x-10">
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
      </div>
      <div className="space-x-2">
        <Button name="Contact" />
        <ButtonFill name="My account" />
      </div>
    </nav>
  );
}
