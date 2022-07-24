import Auctions from "../components/Auctions/Auctions";
import BottomSection from "../components/BottomSection/BottomSection";
import CardSections from "../components/CardSections/CardSections";
import Heading from "../components/HeadingSection/Heading";
import Container from "../components/layout/Container";
import ColorSection from "../components/MidSection/ColorSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Heading />
      <Auctions />
      <ColorSection />
      <CardSections />
      <BottomSection />
    </Container>
  );
}
