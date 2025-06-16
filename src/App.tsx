// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/about-me";
import Banner from "./components/banner";
import Cursor from "./components/cursor";
import Gallery from "./components/gallery";
import Header from "./components/header";

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Banner />
      <Gallery />
      <About />
    </>
  );
}

export default App;
