import Hero from "./components/Hero";
import  Navbar  from "./components/Navbar";
import Services from "./components/Services";
import Produits from "./components/Produits";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import CardComponent from "../app//components/CardComponent"


export default function Page() {
  return (
    <>
      <Navbar />
       <Hero/>
       <Services/>
       <CardComponent/>
       <Solutions/>
       <Footer/>
    </>
  );
}
