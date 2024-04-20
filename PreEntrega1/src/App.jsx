import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Carrousel from "./components/Carrousel";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={"ENVIO GRATIS A TODO EL MUNDO CON TU COMPRA MAYOR A US$ 1.000"} />
      <Banner />
      <Carrousel />
      <Footer />
    </>
  )
}

export default App
