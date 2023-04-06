import "./App.css";
import Cards from "./components/Cards/Cards";
import FooterDesign from "./components/Footer/FooterDesign";
import HeaderDesign from "./components/Header/HeaderDesign";

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
    <div className="App">
      <HeaderDesign links={links} />
      <Cards />
      <FooterDesign links={links} />
    </div>
  );
}

export default App;
