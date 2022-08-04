import ContentLayout from "../layout/ContentLayout";
import CardBox from "../utils/Card/CardBox";
import CaroselCard from "../utils/Card/CaroselCard";
import ClipShapeCard from "../utils/Card/ClipShapeCard";

export default function CardSections(props) {
  return (
    <ContentLayout>
      <div className="flex flex-wrap overflow-visible justify-center space-x-3 md:space-x-12 space-y-10 xl:space-y-0 items-center  ">
        <CaroselCard />
        <ClipShapeCard />
        <CardBox />
      </div>
    </ContentLayout>
  );
}
