import { SiAcer } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiBata } from "react-icons/si";

export default function ProductBar(params) {
  return (
    <div className="bg-white">
      <div className=" flex justify-center  space-x-36 w-full">
        <SiAcer size={80} color={"#bbc0d0"} />
        <SiNike size={80} color={"#bbc0d0"} />
        <SiAdidas size={70} color={"#bbc0d0"} />
        <SiBata size={85} color={"#bbc0d0"} />
      </div>
    </div>
  );
}
