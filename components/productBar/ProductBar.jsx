import { SiAcer } from "react-icons/si";
import { SiNike } from "react-icons/si";

export default function ProductBar(params) {
  return (
    <div className=" flex bg-white space-x-10 w-full">
      <SiAcer size={80} color={"#bbc0d0"} />
      <SiNike size={80} color={"#bbc0d0"} />
    </div>
  );
}
