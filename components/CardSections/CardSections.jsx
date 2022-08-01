import ContentLayout from "../layout/ContentLayout";
import CardBox from "../utils/Card/CardBox";
import CaroselCard from "../utils/Card/CaroselCard";
import ClipShapeCard from "../utils/Card/ClipShapeCard";

export default function CardSections(props) {
  return (
    <ContentLayout>
      <div className="flex flex-wrap overflow-visible space-y-10 lg:space-y-0 items-center  md:justify-between">
        <CaroselCard />
        <ClipShapeCard />
        <CardBox />
      </div>
    </ContentLayout>
  );
}
