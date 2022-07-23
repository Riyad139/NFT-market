import ContentLayout from "../layout/ContentLayout";
import CaroselCard from "../utils/Card/CaroselCard";

export default function CardSections(props) {
  return (
    <ContentLayout>
      <div className="flex flex-wrap space-y-10 lg:space-y-0 items-center  md:justify-between">
        <CaroselCard />
        <CaroselCard />
        <CaroselCard />
      </div>
    </ContentLayout>
  );
}
