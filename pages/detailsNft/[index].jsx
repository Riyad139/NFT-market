import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/layout/Container";
import LoadingMainPage from "../../components/Loader/LoadingMainPage";
import NavBar from "../../components/NavBar/NavBar";
import NftContent from "../../components/NftContent/NftContent";
import PopularAuction from "../../components/PopularAuction/PopularAuction";

export default function DetailsIndex(props) {
  const [isLoader, setLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const RouteChange = () => setLoader(false);
    const completedRouteChange = () => setLoader(true);

    router.events.on("routeChangeStart", RouteChange);
    router.events.on("routeChangeComplete", completedRouteChange);
    router.events.on("routeChangeError", completedRouteChange);
  }, [router]);

  if (!isLoader) return <LoadingMainPage />;
  return (
    <Container>
      <NavBar />
      <NftContent pic={props.url} />
      <PopularAuction isDet="More from this user" />
      <Footer />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const url = context.params.index.replaceAll("-", "/");

  return {
    props: { url }, // will be passed to the page component as props
  };
}
