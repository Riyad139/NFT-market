import Auctions from "../components/Auctions/Auctions";
import BottomSection from "../components/BottomSection/BottomSection";
import CardSections from "../components/CardSections/CardSections";
import Footer from "../components/Footer/Footer";
import Heading from "../components/HeadingSection/Heading";
import Container from "../components/layout/Container";
import ColorSection from "../components/MidSection/ColorSection";
import NavBar from "../components/NavBar/NavBar";
import PopularAuction from "../components/PopularAuction/PopularAuction";
import UserProfileSection from "../components/UserProfileSection/UserProfileSection";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Heading />
      <Auctions />
      <ColorSection />
      <CardSections />
      <BottomSection />
      <PopularAuction />
      <UserProfileSection />
      <Footer />
    </Container>
  );
}
