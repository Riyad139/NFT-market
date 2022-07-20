import Auctions from "../components/Auctions/Auctions";
import Heading from "../components/HeadingSection/Heading";
import Container from "../components/layout/Container";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Heading />
      <Auctions />
    </Container>
  );
}
