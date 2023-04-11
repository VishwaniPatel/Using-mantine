import { Container, MantineProvider } from "@mantine/core";
import "./App.css";
import Cards from "./components/Cards/Cards";
import FooterDesign from "./components/Footer/FooterDesign";
import HeaderDesign from "./components/Header/HeaderDesign";
import Main from "./components/Main/Main";
import GetCardData from "./components/Cards/GetCardData";

const links = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "orders",
    label: "Orders",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "contact",
    label: "Contact",
  },
];

// interface HeaderResponsiveProps {
//   links: { link: string; label: string }[];
// }
function App() {
  return (
    <MantineProvider>
      <Container size="xl" px="xs">
        <HeaderDesign links={links} />
        <Cards />
        <GetCardData />
        <Main />
        <FooterDesign links={links} />
      </Container>
    </MantineProvider>
  );
}

export default App;
