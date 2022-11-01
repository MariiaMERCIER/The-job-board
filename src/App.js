import "./App.css";
import Header from "./assets/components/Header";
import Jobs from "./assets/components/Jobs";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="form">
      <div className="container">
      <Header name={"The job board"}/>
      <Jobs className1={"firstJob"}  className2={"secondJob"} className3={"thirdJob"} className4={"forthJob"} className5={"fifthJob"} className6={"sixthJob"} className7={"seventhJob"} className8={"eighthJob"} className9={"ninethJob"} 
      title1= {"Full Time Sales Associate - Sydney Boutique"} title2={"Agent de sécurity-Pantain"} title3={"Responsable d'atelier (H/F"}  title4={"Chef de projet"}  title5={"Développeur React.js"}  title6={"Sales Associate Stockholm"} title7={"Vendeur/se - Crans Montana"}  title8={"CRM&Data Quality Analyst"} title9={"Infirmièr (H/F)"}
      contractType1={"CDI"}contractType2={"CDD"} country1={"Australie"} country2={"France"} country3={"Suede"} country4={"Suisse"} country5={"USA"} city1={"Sydney"} city2={"Pantin"} city3={"Paris"} city4={"Stockholm"} city5={"Crans-Montana"}city6={"New York"}/>
      
  
      <Footer name={"Made with React at Le Reacteur By Mariia MERCIER"}/>
    </div>
    </div>
  );
}

export default App;
