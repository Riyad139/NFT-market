import Auctions from "../components/Auctions/Auctions";
import Heading from "../components/HeadingSection/Heading";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Auctions />
    </div>
  );
}
