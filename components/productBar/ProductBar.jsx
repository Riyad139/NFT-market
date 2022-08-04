import { SiAcer } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiBata } from "react-icons/si";

export default function ProductBar(params) {
  return (
    <div className="bg-white">
      <div className=" flex justify-center text-5xl md:text-7xl space-x-12 md:space-x-28 w-full">
        <SiAcer color={"#bbc0d0"} />
        <SiNike color={"#bbc0d0"} />
        <SiAdidas className="text-4xl md:text-6xl" color={"#bbc0d0"} />
        <SiBata color={"#bbc0d0"} />
      </div>
    </div>
  );
}
