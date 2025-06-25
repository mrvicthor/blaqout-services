// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/about-me";
import Banner from "./components/banner";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Processes from "./components/processes";
import Services from "./components/services";

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Banner />
      <Gallery />
      <About />
      <Processes />
      <Services />
      <Footer />
    </>
  );
}

export default App;
