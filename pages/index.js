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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingNft from "../components/Loader/LoadingNft";

export default function Home() {
  const [isLoader, setLoader] = useState();
  const router = useRouter();

  useEffect(() => {
    const RouteChange = (e) => {
      setLoader(e);
    };
    const completedRouteChange = (e) => setLoader(e);

    router.events.on("routeChangeStart", RouteChange);
    router.events.on("routeChangeComplete", completedRouteChange);
    router.events.on("routeChangeError", completedRouteChange);
  }, [router]);

  if (isLoader?.includes("detailsNft")) return <LoadingNft />;

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
