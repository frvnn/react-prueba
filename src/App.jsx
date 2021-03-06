import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Artists from "./components/Artista/Artists";
import Events from "./components/Evento/Events";
import Services from "./components/Servicio/Services";

const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <Events />
    <Services />
    <Artists />
    <About />
    <Contact />
    <Footer />
    </>
  );
};

export default App;
