import Button from "../Buttons/Button";
import ButtonWithLessPad from "../Buttons/ButtonWithLessPad";
import ContentLayout from "../layout/ContentLayout";
import Card from "../utils/Card/Card";

const data = [
  "/Carosel/Caros-1.jpeg",
  "/Carosel/Caros-2.jpeg",
  "/Carosel/Caros-3.jpeg",
  "/Carosel/Caros-4.jpeg",
  "/Carosel/Caros-5.jpeg",
  "/Carosel/Caros-6.jpeg",
];

export default function PopularAuction(params) {
  return (
    <ContentLayout>
      <div className="py-10 border-b  flex flex-col  items-center">
        <p className="uppercase mb-2 text-[#7780a1] tracking-wider text-xs">
          Overline
        </p>
        <h2 className="text-3xl mb-8 font-headers font-semibold">
          Most popular live auctions
        </h2>
        <div className="flex mb-12 space-x-5">
          <ButtonWithLessPad name="architecture" />
          <ButtonWithLessPad name="Photography" isPhoto={true} />
          <ButtonWithLessPad name="Games" />
          <ButtonWithLessPad name="Music" />
        </div>
        <div className="flex mb-14 md:flex-row flex-col items-center space-y-9 md:space-y-0 md:space-x-5">
          {data.map((item, i) => (
            <Card nft={item} key={i} isCardSection={true} />
          ))}
        </div>
        <Button name="Show me more" />
      </div>
    </ContentLayout>
  );
}
