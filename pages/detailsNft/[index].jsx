import Footer from "../../components/Footer/Footer";
import Container from "../../components/layout/Container";
import NavBar from "../../components/NavBar/NavBar";
import NftContent from "../../components/NftContent/NftContent";
import PopularAuction from "../../components/PopularAuction/PopularAuction";

export default function index(props) {
  return (
    <Container>
      <NavBar />
      <NftContent pic = {props.url} />
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
