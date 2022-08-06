import Button from "../Buttons/Button";
import ButtonWithLessPad from "../Buttons/ButtonWithLessPad";
import ContentLayout from "../layout/ContentLayout";
import Card from "../utils/Card/Card";

const data = [
  "/PopularSection/PopularCard1.jpg",
  "/PopularSection/PopularCard2.jpg",
  "/PopularSection/PopularCard3.jpg",
  "/PopularSection/PopularCard4.jpg",
  "/PopularSection/PopularCard5.jpg",
  "/PopularSection/PopularCard6.jpg",
];

export default function PopularAuction(props) {
  return (
    <ContentLayout>
      <div className="py-10 border-b  flex flex-col  items-center">
        <p className="uppercase mb-2 text-[#7780a1] tracking-wider text-xs">
          Overline
        </p>
        <h2 className="text-3xl text-center mb-8 font-headers font-semibold">
          {props.isDet ? props.isDet : "Most popular live auctions"}
        </h2>
        {!props.isDet && (
          <div className="flex mb-12 space-x-5">
            <ButtonWithLessPad name="architecture" />
            <ButtonWithLessPad name="Photography" isPhoto={true} />
            <ButtonWithLessPad name="Games" />
            <ButtonWithLessPad name="Music" />
          </div>
        )}
        <div className="flex mb-14 md:flex-row flex-col items-center space-y-9 md:space-y-0 md:space-x-5">
          {data.map((item, i) => (
            <Card nft={item} key={"popular"+i} isCardSection={true} />
          ))}
        </div>
        <Button name="Show me more" />
      </div>
    </ContentLayout>
  );
}
